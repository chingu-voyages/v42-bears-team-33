import Twilio from 'twilio';
import pino from 'pino';
import _ from 'lodash';
import { ObjectId } from 'mongodb';
import clientPromise from '../../config/mongodb';
import { HTTP, HTTP_STATUS_CODE, MONGODB_COLLECTION, MONGODB_DATABASE, TWILIO_SENDER } from '../../config/constant';

export default async function handler(req, res) {
  const { method } = req;
  const logger = pino();

  // MongoDB Config
  const client = await clientPromise;
  const db = client.db(MONGODB_DATABASE);

  switch (method) {
    case HTTP.GET: {
      logger.info('HTTP GET: /api/scheduledsms/');

      // Twilio Config
      const accountSid = process.env.TWILIO_SID;
      const authToken = process.env.TWILIO_TOKEN;
      const twilioClient = new Twilio(accountSid, authToken);

      // Get today's date
      const todayDate = new Date().toISOString().slice(0, -14);
      logger.info(`Today's Date: ${todayDate}`);

      // Retrieve all SMS to send out today
      const scheduledSMSList = await db
        .collection(MONGODB_COLLECTION.SCHEDULED_SMS)
        .find({
          scheduledDate: { $eq: todayDate },
          sentStatus: false,
        })
        .toArray();

      if (_.isNil(scheduledSMSList)) {
        res.status(HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR).json({ error: 'Cannot connect to MongoDB' });
      }

      const response = {
        totalSMS: scheduledSMSList.length,
      };
      let sentSMS = 0;
      for (const sms of scheduledSMSList) {
        try {
          const friend = await db.collection(MONGODB_COLLECTION.FRIEND).findOne({ _id: ObjectId(sms.friendId) });

          const twilioResponse = await twilioClient.messages.create({
            from: TWILIO_SENDER,
            body: sms.message,
            to: friend.countryCode + friend.mobileNumber,
          });

          if (twilioResponse.errorCode == null) {
            sms.sentStatus = true;
            await db.collection(MONGODB_COLLECTION.SCHEDULED_SMS).replaceOne({ _id: ObjectId(sms._id) }, sms);
            sentSMS++;
          }
          logger.info(response);
        } catch (e) {
          logger.error(e);
        }

        response.sentSMS = sentSMS;

        res.status(HTTP_STATUS_CODE.CREATED).json(response);
      }
      break;
    }
    default: {
      res.setHeader('Allow', [HTTP.GET]);
      res.status(HTTP_STATUS_CODE.METHOD_NOT_ALLOWED).end(`Method ${method} Not Allowed`);
      break;
    }
  }
}
