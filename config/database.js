import mongoose from "mongoose";
import { DATABASE_URL } from "./env.js";

const connectDB = async () => {
  try {
    await mongoose.connect(DATABASE_URL);
    console.log("MongoDB connected...");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
};



export default connectDB;
