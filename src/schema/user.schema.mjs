import mongoose from "mongoose";

const UserModel = new mongoose.Schema(
  {
    name: { type: String, required: true, minlength: 3 },
    userName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    age: { type: Number, min: 18 },
    password: { type: String, required: true },
  },

  { timestamps: true }
);

export const User = mongoose.model("User", UserModel);
