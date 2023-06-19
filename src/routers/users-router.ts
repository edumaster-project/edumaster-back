import { signIn, signUp } from "@/controllers";
import { validateSchema } from "@/middlewares";
import { signInSchema, signUpSchema } from "@/schemas";
import { Router } from "express";

const userRoutes = Router();

userRoutes
  .post("/signup", validateSchema(signUpSchema), signUp)
  .post("/signin", validateSchema(signInSchema), signIn);

export { userRoutes };
