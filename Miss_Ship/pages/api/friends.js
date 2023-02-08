import pino from 'pino';
import _ from 'lodash';
import clientPromise from '../../config/mongodb';
import { HTTP, HTTP_STATUS_CODE, MONGODB_COLLECTION, MONGODB_DATABASE } from '../../config/constant';
import admin from '../../config/firebase';

export default async function handler(req, res) {
  const logger = pino();
  const client = await clientPromise;
  const db = client.db(MONGODB_DATABASE);
  const { method } = req;
  let userId;

  const headerToken = req.headers.authorization;
  logger.debug(`Token Received: ${headerToken}`);
  if (_.isNil(headerToken)) {
    res.status(HTTP_STATUS_CODE.UNAUTHORIZED).json({ error: 'Invalid Firebase Token' });
  }

  try {
    const token = headerToken.split(' ')[1];
    userId = await admin.auth().verifyIdToken(token);
  } catch (e) {
    logger.error(e);
    // res.status(HTTP_STATUS_CODE.UNAUTHORIZED).json({ error: 'Invalid/Expired Firebase Token' });
  }

  switch (method) {
    case HTTP.GET: {
      logger.info('HTTP GET: /api/friends/');

      let friendsList;
      // userId = 'Yk1eA8Vbh7fFIRd3eTNXvyHCdwH3';
      if (_.isNil(userId)) {
        logger.info('UserID is invalid, retrieving all friends');
        friendsList = await db.collection(MONGODB_COLLECTION.FRIEND).find({}).toArray();
      } else {
        friendsList = await db
          .collection(MONGODB_COLLECTION.FRIEND)
          .find({ userId: { $eq: userId } })
          .toArray();
      }

      res.json({ status: HTTP_STATUS_CODE.OK, data: friendsList });
      break;
    }
    case HTTP.POST: {
      const body = JSON.parse(JSON.stringify(req.body));
      logger.info(`HTTP POST: /api/friends/ BODY: ${body}`);
      logger.info(body);

      for (const friend of body) {
        if (_.isNil(userId)) {
          logger.info('Invalid Firebase Token, Adding to mock account');
          friend.userId = 'Yk1eA8Vbh7fFIRd3eTNXvyHCdwH3';
        } else {
          friend.userId = userId;
        }
      }

      const result = await db.collection(MONGODB_COLLECTION.FRIEND).insertMany(body);
      res.status(HTTP_STATUS_CODE.CREATED).json(result);
      break;
    }
    default: {
      res.setHeader('Allow', [HTTP.GET, HTTP.POST]);
      res.status(HTTP_STATUS_CODE.METHOD_NOT_ALLOWED).end(`Method ${method} Not Allowed`);
      break;
    }
  }
}
