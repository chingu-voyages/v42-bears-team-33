import { ObjectId } from 'mongodb';
import pino from 'pino';
import clientPromise from '../../../config/mongodb';
import {
  HTTP,
  HTTP_STATUS_CODE,
  MONGODB_COLLECTION,
  MONGODB_DATABASE,
} from '../../../config/constant';

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
      logger.info(`HTTP GET: /api/friends/${req.query.id}`);

      const id = { _id: ObjectId(req.query.id) };
      const result = await db.collection(MONGODB_COLLECTION.FRIEND).findOne(id);

      if (result != null) {
        res.status(HTTP_STATUS_CODE.OK).json(result);
      } else {
        res.status(HTTP_STATUS_CODE.NOT_FOUND).json(result);
      }
      break;
    }
    case HTTP.PATCH: {
      logger.info(`HTTP PATCH: /api/friends/${req.query.id}`);

      const id = { _id: ObjectId(req.query.id) };
      const body = JSON.parse(JSON.stringify(req.body));

      const result = await db
        .collection(MONGODB_COLLECTION.FRIEND)
        .replaceOne(id, body);

      if (result.modifiedCount !== 0) {
        res.status(HTTP_STATUS_CODE.OK).json(result);
      } else {
        res.status(HTTP_STATUS_CODE.NOT_FOUND).json(result);
      }
      break;
    }
    case HTTP.DELETE: {
      logger.info(`HTTP DELETE: /api/friends/${req.query.id}`);

      const id = { _id: ObjectId(req.query.id) };
      const result = await db
        .collection(MONGODB_COLLECTION.FRIEND)
        .deleteOne(id);

      if (result.deletedCount === 1) {
        res.status(HTTP_STATUS_CODE.ACCEPTED).json(result);
      } else {
        res.status(HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR).json(result);
      }
      break;
    }
    default: {
      logger.info('Invalid HTTP Method: /api/friends/{ID}');

      res.setHeader('Allow', [HTTP.GET, HTTP.PATCH, HTTP.DELETE]);
      res
        .status(HTTP_STATUS_CODE.METHOD_NOT_ALLOWED)
        .end(`Method ${method} Not Allowed`);
      break;
    }
  }
}
