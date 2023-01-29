import clientPromise from '../../config/mongodb';
import {
  HTTP,
  HTTP_STATUS_CODE,
  MONGODB_COLLECTION,
  MONGODB_DATABASE,
} from '../../config/constant';

export default async function handler(req, res) {
  // TODO
  // 1) Logging
  // 2) Validation
  // 3) Security
  const client = await clientPromise;
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
    case HTTP.POST: {
      const body = JSON.parse(JSON.stringify(req.body));
      const friend = await db
        .collection(MONGODB_COLLECTION.FRIEND)
        .insertOne(body);
      res.status(HTTP_STATUS_CODE.CREATED).json(friend);
      break;
    }
    default: {
      res.setHeader('Allow', [HTTP.GET, HTTP.POST]);
      res
        .status(HTTP_STATUS_CODE.METHOD_NOT_ALLOWED)
        .end(`Method ${method} Not Allowed`);
      break;
    }
  }
}
