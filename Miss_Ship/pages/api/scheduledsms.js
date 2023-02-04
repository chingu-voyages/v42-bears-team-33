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

  // Twilio Config
  const accountSid = process.env.TWILIO_SID;
  const authToken = process.env.TWILIO_TOKEN;
  const twilioClient = new Twilio(accountSid, authToken);

  switch (method) {
    case HTTP.GET: {
      logger.info('HTTP GET: /api/scheduledsms/');

      const todayDate = new Date().toISOString().slice(0, -14);
      logger.info(`Today's Date: ${todayDate}`);

      const scheduledSMSList = await db
        .collection(MONGODB_COLLECTION.SCHEDULED_SMS)
        .find({ scheduledDate: { $eq: todayDate } })
        .toArray();

      if (_.isNil(scheduledSMSList)) {
        res.status(HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR).json({ error: 'Cannot connect to MongoDB' });
      }

      for (const sms of scheduledSMSList){
        logger.info(JSON.stringify(sms));
      }
      // for (let i = 0; i < scheduledSMSList; i++) {
      //   // send messages here.
      //   logger.info(scheduledSMSList[i].friendId);
      //   // const friend = await db.collection(MONGODB_COLLECTION.FRIEND).findOne({ _id: ObjectId(scheduledSMSList.friendId) });
      //
      //   // if (_.isNil(friend)) {
      //   //   res.status(HTTP_STATUS_CODE.NOT_FOUND).json(friend);
      //   // }
      // }

      res.status(HTTP_STATUS_CODE.CREATED).json(scheduledSMSList);
      break;
    }
    case HTTP.POST: {
      const body = JSON.parse(JSON.stringify(req.body));
      logger.info(`HTTP POST: /api/scheduledsms BODY: ${JSON.stringify(req.body)}`);
      body.sentStatus = false;

      const scheduledSMS = await db.collection(MONGODB_COLLECTION.SCHEDULED_SMS).insertOne(body);
      res.status(HTTP_STATUS_CODE.CREATED).json(scheduledSMS);

      break;
    }
    default: {
      res.setHeader('Allow', [HTTP.POST]);
      res.status(HTTP_STATUS_CODE.METHOD_NOT_ALLOWED).end(`Method ${method} Not Allowed`);
      break;
    }
  }
}
