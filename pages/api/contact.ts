import { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient } from 'mongodb';

interface ReqBody {
  email: string;
  name: string;
  message: string;
}

interface ResponseType {
  message: string;
}

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) => {
  if (req.method === 'POST') {
    const { email, name, message } = req.body as ReqBody;

    if (
      !email ||
      !email.includes('@') ||
      !name ||
      name.trim() === '' ||
      !message ||
      message.trim() === ''
    ) {
      res.status(422).json({ message: 'Bad Request' });
    }
    let client;
    try {
      client = await MongoClient.connect(process.env.MONGO_URI, {
        auth: {
          user: process.env.MONGO_USERNAME,
          password: process.env.MONGO_PASSWORD,
        },
        authSource: 'admin',
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      const db = client.db();
      await db.collection('messages').insertOne({ email, name, message });
    } catch (error) {
      console.error('Error connecting/sending data to db: ', error);
      res.status(500).json({ message: 'Internal server error' });
    } finally {
      client.close();
    }
    res.status(201).json({ message: 'Message submitted' });
  } else {
    res.status(422).json({ message: 'Bad Request' });
  }
};

export default handler;
