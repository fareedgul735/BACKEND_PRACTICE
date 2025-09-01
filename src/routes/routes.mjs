import { Router } from "express";
import { User } from "../schema/user.schema.mjs";

const userRouter = Router();

userRouter.post("/user", async (req, res) => {
  try {
    const usersData = {
      ...req.body,
    };
    const newUser = new User(usersData);
    await newUser.save();
    res.status(200).json({ data: newUser });
  } catch (err) {
    console.log(err);
    res.status(404).json({ message: err });
  }
});
export default userRouter;
