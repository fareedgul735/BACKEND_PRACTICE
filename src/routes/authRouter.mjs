import { Router } from "express";
import validate from "../middleware/validator.js";
import signupSchema from "../validator/auth/signup.validation.mjs";
import { User } from "../schema/user.schema.mjs";
import bcrypt from "bcrypt";
const router = Router();

router.post("/signup", validate(signupSchema), async (req, res) => {
  try {
    const { password, ...data } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const newPayload = {
      password: hashedPassword,
      ...data,
    };
    const newUser = new User(newPayload);
    await newUser.save(),
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

export default router;
