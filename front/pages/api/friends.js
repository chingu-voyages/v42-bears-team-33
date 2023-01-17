export default function handler(req, res) {
  const { method } = req;
  switch (method) {
    case 'GET':
      res.status(200).json({ name: 'GET' });
      break;
    case 'POST':
      // const { todo, completed } = req.body;
      console.log(req.body);
      // console.log(completed);
      res.status(201).json({ name: 'POST' });
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
}
