import Twilio from 'twilio';
import pino from 'pino';
import _ from 'lodash';
import { ObjectId } from 'mongodb';
import clientPromise from '../../config/mongodb';
import {
  HTTP,
  HTTP_STATUS_CODE,
  MONGODB_COLLECTION,
  MONGODB_DATABASE,
  TWILIO_SENDER,
} from '../../config/constant';

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
    case HTTP.POST: {
      const body = JSON.parse(JSON.stringify(req.body));
      logger.info(body);

      if (_.values(body).every(_.isNil)) {
        res.status(HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR).end('null in field');
      }

      const friend = await db
        .collection(MONGODB_COLLECTION.FRIEND)
        .findOne({ _id: ObjectId(body.friendId) });

      if (_.isNil(friend)) {
        res.status(HTTP_STATUS_CODE.NOT_FOUND).json(friend);
      }

      twilioClient.messages
        .create({
          from: TWILIO_SENDER,
          body: body.message,
          to: friend.countryCode + friend.mobileNumber,
        })
        .then((message) => {
          logger.info(message.sid);
          res.status(HTTP_STATUS_CODE.CREATED).json(message);
        })
        .catch((err) => {
          logger.error(err);
          res.status(HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR).json(err);
        });

      break;
    }
    default: {
      res.setHeader('Allow', [HTTP.POST]);
      res
        .status(HTTP_STATUS_CODE.METHOD_NOT_ALLOWED)
        .end(`Method ${method} Not Allowed`);
      break;
    }
  }
}
