import clientPromise from '../../config/mongodb';

export default async function handler(req, res) {
  // TODO: Externalise the configuration
  const client = await clientPromise;
  const db = client.db('friendship');

  const { method } = req;
  switch (method) {
    case 'GET': {
      const allFriends = await db.collection('friend').find({}).toArray();
      res.json({ status: 200, data: allFriends });
      break;
    }
    case 'POST': {
      const body = JSON.parse(JSON.stringify(req.body));
      const friend = await db.collection('friend').insertOne(body);
      res.status(201).json(friend);
      break;
    }
    default: {
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
    }
  }
}
