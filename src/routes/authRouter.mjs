import { Router } from "express";
import validate from "../middleware/validator.js";
import signupSchema from "../validator/auth/signup.validation.mjs";
import bcrypt from "bcrypt";
import { Signup } from "../schema/signup.schema.mjs";
import RandomOtpNum from "../lib/helpers/RandomOtpNum.js";
import Otp from "../schema/otp.schema.js";
import sendEmail from "../lib/services/SendEmail.js";
import jwt from "jsonwebtoken";

const router = Router();

router.post("/signup", validate(signupSchema), async (req, res) => {
  try {
    const { password, email, ...data } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const newPayload = {
      password: hashedPassword,
      email,
      ...data,
    };
    const otpCode = RandomOtpNum();

    const newUser = new Signup(newPayload);
    const newOtpSend = new Otp({
      userId: newUser._id,
      code: otpCode,
    });
    await Promise.all([
      newUser.save(),
      newOtpSend.save(),
      sendEmail({
        to: email,
        subject: "Verify Your Account",
        text: `Please verify your account using this OTP: ${otpCode}`,
      }),
    ]);
    res
      .status(201)
      .send({ data: newUser.id, message: "User signup successfully" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Something went wrong",
      error: err.message,
    });
  }
});

router.post("/signin", async (req, res) => {
  try {
    const { password, email } = req.body;

    const user = await Signup.findOne({ email }).select("email password");
    if (!user) {
      return res.status(401).send({ error: "Invalid Credential" });
    }

    const isPasswordMatched = await bcrypt.compare(password, user.password);
    if (!isPasswordMatched) {
      return res.status(401).send({ error: "Invalid Credential" });
    }

    const jwtPayload = { id: user.id, email: user.email };
    const accessToken = jwt.sign(jwtPayload, process.env.JWT_SECRET_KEY, {
      expiresIn: "1d",
    });

    return res
      .status(200)
      .send({ data: { accessToken }, message: "User Signin successfully" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      message: "Something went wrong",
      error: err.message,
    });
  }
});

export default router;
