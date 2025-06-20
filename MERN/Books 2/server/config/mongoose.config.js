import { connect } from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI;
const DB_NAME = process.env.DB_NAME;

async function dbConnect() {
  try {
    await connect(MONGODB_URI, { dbName: DB_NAME });
    console.log(`✅ Connected to MongoDB: ${DB_NAME}`);
  } catch (err) {
    console.error("❌ MongoDB connection failed:", err);
    throw err;
  }
}

export default dbConnect;
