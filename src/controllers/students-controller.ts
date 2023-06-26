import { NextFunction, Response } from "express";
import httpStatus from "http-status";
import { AuthenticatedRequest } from "@/middlewares";
import studentService from "@/services/student-service";

export async function getStudents(
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) {
    const {classId} = req.params
  try {
    const listStudents = await studentService.getAllStudents(Number(classId));
    return res.status(httpStatus.OK).send(listStudents);
  } catch (error) {
    next(error);
  }
}

export async function createStudent(
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) {
  const studentData = req.body;

  try {
    const createdClass = await studentService.createStudent(studentData);

    return res.status(httpStatus.OK).send(createdClass);
  } catch (error) {
    next(error);
  }
}
