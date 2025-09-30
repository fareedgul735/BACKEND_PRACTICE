import mongoose from "mongoose";

const SignupModel = new mongoose.Schema(
  {
    userName: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },

  { timestamps: true }
);

export const Signup = mongoose.model("signup", SignupModel);
