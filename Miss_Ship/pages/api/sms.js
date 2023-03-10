import Twilio from 'twilio';
import pino from 'pino';
import _ from 'lodash';
import { ObjectId } from 'mongodb';
import admin from '@config/firebase';
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

  // Bearer Token Retrieval
  const headerToken = req.headers.authorization;
  logger.debug(`Token Received: ${headerToken}`);
  if (_.isNil(headerToken)) {
    res.status(HTTP_STATUS_CODE.UNAUTHORIZED).json({ error: 'Invalid Firebase Token' });
  }

  let userId;

  try {
    const token = headerToken.split(' ')[1];
    userId = (await admin.auth().verifyIdToken(token)).uid;
  } catch (e) {
    logger.error(e);
    // res.status(HTTP_STATUS_CODE.UNAUTHORIZED).json({ error: 'Invalid/Expired Firebase Token' });

    // Mock Account
    userId = 'Yk1eA8Vbh7fFIRd3eTNXvyHCdwH3';
  }

  switch (method) {
    case HTTP.POST: {
      const body = JSON.parse(JSON.stringify(req.body));
      logger.info(body);

      if (_.values(body).every(_.isNil)) {
        res.status(HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR).end('null in field');
      }

      const friend = await db.collection(MONGODB_COLLECTION.FRIEND).findOne({ _id: ObjectId(body.friendId) });

      if (_.isNil(friend)) {
        res.status(HTTP_STATUS_CODE.NOT_FOUND).json(friend);
      }

      try {
        const twilioResponse = await twilioClient.messages.create({
          from: TWILIO_SENDER,
          body: body.message,
          to: friend.countryCode + friend.mobileNumber,
        });

        if (twilioResponse.errorCode == null) {
          await db.collection(MONGODB_COLLECTION.SENT_SMS).insertOne({
            userId,
            body: body.message,
            friendId: body.friendId,
          });
        }

        res.status(HTTP_STATUS_CODE.CREATED).json(twilioResponse);
      } catch (err) {
        logger.error(err);
        res.status(HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR).json(err);
      }

      break;
    }
    default: {
      res.setHeader('Allow', [HTTP.POST]);
      res.status(HTTP_STATUS_CODE.METHOD_NOT_ALLOWED).end(`Method ${method} Not Allowed`);
      break;
    }
  }
}
