import pino from 'pino';
import _ from 'lodash';
import admin from '@config/firebase';
import clientPromise from '../../config/mongodb';
import { HTTP, HTTP_STATUS_CODE, MONGODB_COLLECTION, MONGODB_DATABASE } from '../../config/constant';

export default async function handler(req, res) {
  const { method } = req;
  const logger = pino();

  // MongoDB Config
  const client = await clientPromise;
  const db = client.db(MONGODB_DATABASE);

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


  // TODO
  switch (method) {
    case HTTP.GET: {
      logger.info('HTTP GET: /api/sent/');
      const sentSMSList = await db
        .collection(MONGODB_COLLECTION.SENT_SMS)
        .find({ userId: { $eq: userId } })
        .toArray();

      res.json({ status: HTTP_STATUS_CODE.OK, data: sentSMSList });
      break;
    }
    default: {
      res.setHeader('Allow', [HTTP.GET]);
      res.status(HTTP_STATUS_CODE.METHOD_NOT_ALLOWED).end(`Method ${method} Not Allowed`);
      break;
    }
  }
}
