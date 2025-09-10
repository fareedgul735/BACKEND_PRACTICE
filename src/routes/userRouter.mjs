import { Router } from "express";
import { User } from "../schema/user.schema.mjs";
import userSchemaValidate from "../validator/user.validation.mjs";
import validate from "../middleware/validator.js";

const router = Router();

// router.post("/user", async (req, res) => {
//   try {
//     const { error, value } = userSchemaValidate.validate(req.body);
//     if (error) {
//       res.status(400).json({ message: error.details[0].message });
//     }
//     const addUser = new User(value);
//     await addUser.save();
//     res.status(200).json({ data: addUser });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ message: "Server error", error: err.message });
//   }
// });

router.post("/user", validate(userSchemaValidate), async (req, res) => {
  try {
    const userData = {
      ...req.body,
    };
    const addUser = new User(userData);
    await addUser.save();
    res.status(201).json({ data: addUser });
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err });
  }
});

router.get("/user", async (_, res) => {
  try {
    const getUsers = await User.find();
    res.status(200).json({ data: getUsers });
  } catch (err) {
    console.log(err);
  }
});

router.get("/user/:id", async (req, res) => {
  try {
    const uniqueUser = await User.findById(req.params.id);
    res.status(200).json({ data: uniqueUser });
  } catch (err) {
    console.log(err);
  }
});

router.delete("/user/:id", async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    res.json({
      deletedUser,
    });
  } catch (err) {
    console.log(err);
  }
});
router.put("/user/:id", async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json({ message: "User updated", updatedUser });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
