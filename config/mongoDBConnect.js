import mongoose from "mongoose";

export const mongoDBConnection = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/serveraction");
    console.log("mongodb connection established");
  } catch (error) {
    console.log(error.message);
  }
};
