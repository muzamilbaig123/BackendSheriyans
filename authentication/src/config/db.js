import mongoose from "mongoose";
import config from "./config";

export const connectToDb = async () => {
    await mongoose.connect(config.MONGO_URI)
    console.log("Database is Connected");
}
