import { connect } from "mongoose";
import dotenv from "dotenv";
dotenv.config();

async function dbConnect() {
  try {
    await connect(process.env.MONGODB_URI, { dbName: process.env.DB_NAME });
    console.log("✅ Connected to MongoDB!");
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

export default dbConnect;
