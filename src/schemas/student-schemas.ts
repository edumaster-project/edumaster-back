import joi from "joi";

export const studentsSchema = joi.object({
  name: joi.string().required(),
  birthDate: joi.date().raw().required(),
  fatherName: joi.string().required(),
  matherName: joi.string().required(),
  classId: joi.number().required(),
});
