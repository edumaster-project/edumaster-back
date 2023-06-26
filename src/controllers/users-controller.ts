import { SignInParams, SignUpParams } from "@/protocols/protocols";
import userService from "@/services/users-service";
import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";

export async function signIn(req: Request, res: Response, next: NextFunction) {
  const { email, password } = req.body as SignInParams;

  try {
    const result = await userService.signIn({ email, password });

    return res.status(httpStatus.OK).send(result);
  } catch (error) {
    next(error);
  }
}

export async function signUp(req: Request, res: Response, next: NextFunction) {
  const { name, email, password } = req.body as SignUpParams;

  try {
    const user = await userService.createUser({ name, email, password });
    return res.status(httpStatus.CREATED).json({
      id: user.id,
      email: user.email,
    });
  } catch (error) {
    next(error);
  }
}
