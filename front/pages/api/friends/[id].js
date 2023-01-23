import { ObjectId } from 'mongodb';
import clientPromise from '../../../config/mongodb';
import {
  HTTP, HTTP_STATUS_CODE, MONGODB_COLLECTION, MONGODB_DATABASE
} from '../../../config/constant';

import pino from 'pino';

export default async function handler(req, res) {
  // TODO
  // 1) Logging
  // 2) Validation
  // 3) Security
  const client = await clientPromise;
  const logger = pino();
  const db = client.db(MONGODB_DATABASE);
  const { method } = req;

  switch (method) {
    case HTTP.GET: {
      const allFriends = await db
        .collection(MONGODB_COLLECTION.FRIEND)
        .find({})
        .toArray();
      res.json({ status: HTTP_STATUS_CODE.OK, data: allFriends });
      break;
    }
    case HTTP.PATCH: {
      break;
    }
    case HTTP.DELETE: {
      logger.info('HTTP DELETE: /api/friends/{ID}');
      const id = { _id: ObjectId(req.query.id) };
      const result = await db
        .collection(MONGODB_COLLECTION.FRIEND)
        .deleteOne(id);

      if (result.deletedCount === 1) {
        res.status(HTTP_STATUS_CODE.ACCEPTED).end(JSON.stringify(result));
      } else {
        res
          .status(HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR)
          .end(JSON.stringify(result));
      }

      break;
    }
    default: {
      res.setHeader('Allow', [HTTP.GET, HTTP.PATCH, HTTP.DELETE]);
      res
        .status(HTTP_STATUS_CODE.METHOD_NOT_ALLOWED)
        .end(`Method ${method} Not Allowed`);
      break;
    }
  }
}
