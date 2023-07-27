// pages/api/users/login.js
import { MongoClient } from 'mongodb';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end(); // Method Not Allowed
  }

  const { email, password } = req.body;

  // Ensure that email and password are not empty
  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required.' });
  }

  // Connect to your MongoDB database
  const client = await MongoClient.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const db = client.db();

  try {
    // Save the form data to your MongoDB collection
    const result = await db.collection('users').insertOne({
      email,
      password,
      createdAt: new Date(),
    });

    // Respond with a success message and the inserted document
    return res.status(200).json({ message: 'User data saved successfully.', user: result.ops[0] });
  } catch (error) {
    console.error('Error saving user data:', error);
    return res.status(500).json({ error: 'An error occurred while saving user data.' });
  } finally {
    // Close the database connection
    client.close();
  }
}

