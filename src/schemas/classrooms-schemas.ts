import joi from "joi";

export const classesSchema = joi.object({
  name: joi.string().required(),
  quantity: joi.number().required() || joi.string().required(),
});
