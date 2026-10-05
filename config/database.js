import mongoose from "mongoose";
import { DATABASE_URI } from "./env.js";


if (!DATABASE_URI) {
  console.error("DATABASE_URI is not defined in the environment variables.");
  process.exit(1);
}

const connectDB = async () => {
  try {
    await mongoose.connect(DATABASE_URI);
    console.log("MongoDB connected...");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
};



export default connectDB;
