import { createClasses, getClasses } from "@/controllers";
import { authenticateToken, validateSchema } from "@/middlewares";
import { classesSchema } from "@/schemas";
import { Router } from "express";

const classRoutes = Router();

classRoutes
  .all("/*", authenticateToken)
  .post("/", validateSchema(classesSchema), createClasses)
  .get("/", getClasses);

export { classRoutes };
