import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const MONGO_URI = process.env.MONGO_URI;

const connectDB = async () => {
  try {
    mongoose.connect(MONGO_URI);
    console.log("mongoDB connected");
  } catch (err) {
    console.log("mongoDB connection failer", err.message);
    process.exit(1);
  }
};

export default connectDB;
