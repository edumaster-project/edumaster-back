import { NextFunction, Response } from "express";
import httpStatus from "http-status";
import { AuthenticatedRequest } from "@/middlewares";
import classService from "@/services/class-service";

export async function getClasses(
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) {
  try {
    const { userId } = req;
    const listClasses = await classService.getAllClasses(userId);
    return res.status(httpStatus.OK).send(listClasses);
  } catch (error) {
    next(error);
  }
}

export async function createClasses(
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) {
  const { userId } = req;
  const userData = req.body;

  const convertData = {
    name: userData.name,
    quantity: Number(userData.quantity),
  };
  try {
    const createdClass = await classService.createClasses(userId, convertData);

    return res.status(httpStatus.OK).send(createdClass);
  } catch (error) {
    next(error);
  }
}
