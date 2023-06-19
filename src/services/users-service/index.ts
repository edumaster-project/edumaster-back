import { invalidCredentialsError } from "@/errors";
import { SignInParams } from "@/protocols/protocols";
import sessionRepository from "@/repositories/session-repository";
import userRepository from "@/repositories/user-repository";
import { exclude } from "@/utils/prisma-utils";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

async function signIn(params: SignInParams) {
  const { email, password } = params;

  const user = await getUser(email);

  const validatePassword = bcrypt.compare(password, user.password);
  if (!validatePassword) throw invalidCredentialsError();

  const token = await createSession(user.id);

  console.log(token);
  return {
    user: exclude(user, "password"),
    token,
  };
}

async function createSession(userId: number) {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET);
  await sessionRepository.create({ token, userId });
  
  return token
}

async function getUser(email: string) {
  const user = await userRepository.findByEmail(email);

  if (!user) throw invalidCredentialsError();

  return user;
}

const userService = {
  signIn,
};

export default userService;
