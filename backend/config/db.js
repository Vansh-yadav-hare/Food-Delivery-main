import mongoose from "mongoose";

const connectDB = async () => {
  try {
    // 🔥 IMPORTANT: use process.env.MONGO_URL EXACTLY
    const mongoURI = process.env.MONGO_URL;

    

    await mongoose.connect(mongoURI);

    console.log("MongoDB Connected");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1);
  }
};

export default connectDB;
