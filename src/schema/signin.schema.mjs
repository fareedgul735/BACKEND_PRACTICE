import mongoose from "mongoose";

const signinSchema = new mongoose.Schema({
  email: { type: String, required: true },
  passsword: { type: String, required: true },
});

export const Signin = mongoose.model("signin", signinSchema);
