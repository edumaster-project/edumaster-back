import { validateSchema } from "@/middlewares";
import { signInSchema, signUpSchema } from "@/schemas";
import { Router } from "express";

const userRoutes = Router();

userRoutes
  .post("/signup", validateSchema(signUpSchema), () => console.log("teste"))
  .post("/signin", validateSchema(signInSchema), () => console.log("teste"));

export { userRoutes };
