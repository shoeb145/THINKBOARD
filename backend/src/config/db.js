import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("database is connected");
  } catch (err) {
    console.error("error connecting to mongodb", err);
    process.exit(1);
  }
};
