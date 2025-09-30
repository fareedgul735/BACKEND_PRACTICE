import { model, Schema } from "mongoose";

const otpSchema = new Schema(
  {
    code: { type: Number, required: true },
    userId: { type: String, required: true },
    expiredAt: { type: Date, required: false },
    resendAt: { type: Date },
    consumedAt: { type: Date },
  },
  { timestamps: true }
);

const Otp = model("otp", otpSchema);

export default Otp;
