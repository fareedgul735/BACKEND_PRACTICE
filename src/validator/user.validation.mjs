import Joi from "joi";

const userSchemaValidate = Joi.object({
  name: Joi.string().min(3).max(18).required(),
  email: Joi.string().required(),
  age: Joi.number(),
});
export default userSchemaValidate;
