import { User } from "@prisma/client";

export type ApplicationError = {
  name: string;
  message: string;
};

export type SignInParams = Pick<User, "email" | "password">;

export type SignUpParams = Pick<User, "name" | "email" | "password">;
