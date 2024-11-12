import mongoose from "mongoose";

const devsSchema = mongoose.Schema(
  {
    name: String,
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    cell: String,
    location: String,
    photo: String,
  },

  {
    timeStamps: true,
  }
);

export default mongoose.models.dev || mongoose.model("dev", devsSchema);
