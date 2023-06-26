import { createStudent, getStudents } from "@/controllers";
import { authenticateToken, validateSchema } from "@/middlewares";
import { studentsSchema } from "@/schemas";
import { Router } from "express";

const studentRoutes = Router();

studentRoutes
  .all("/*", authenticateToken)
  .post("/", validateSchema(studentsSchema), createStudent)
  .get("/:classId", getStudents);

export { studentRoutes };
