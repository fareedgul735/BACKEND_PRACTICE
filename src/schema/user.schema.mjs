import mongoose from "mongoose";

const UserModel = new mongoose.Schema(
  {
    name: { type: String, required: true, minlength: 3 },
    email: { type: String, required: true, unique: true },
    age: { type: Number, min: 18 },
  },

  { timestamps: true }
);

export const User = mongoose.model("User", UserModel);
