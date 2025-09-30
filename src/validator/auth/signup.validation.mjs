import Joi from "joi";
import { Password } from "../../lib/pattern.mjs";

const signupSchema = Joi.object({
  userName: Joi.string().min(3).max(18).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(8).pattern(Password).required().messages({
    "string.pattern.base":
      "Password must include at least one uppercase letter, one lowercase letter, one number, and one special character.",
  }),
});

export default signupSchema;
