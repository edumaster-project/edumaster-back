import { duplicatedEmailError, invalidCredentialsError } from "@/errors";
import { SignInParams, SignUpParams } from "@/protocols/protocols";
import sessionRepository from "@/repositories/session-repository";
import userRepository from "@/repositories/user-repository";
import { exclude } from "@/utils/prisma-utils";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

async function signIn(params: SignInParams) {
  const { email, password } = params;

  console.log(params)
  const user = await getUser(email);

  const validatePassword = await bcrypt.compare(password, user.password);
  if (!validatePassword) throw invalidCredentialsError();

  const token = await createSession(user.id);

  return {
    user: exclude(user, "password"),
    token,
  };
}

async function createSession(userId: number) {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET);
  await sessionRepository.create({ token, userId });

  return token;
}

async function getUser(email: string) {
  const user = await userRepository.findByEmail(email);

  if (!user) throw invalidCredentialsError();

  return user;
}

async function createUser(params: SignUpParams) {
  const { name, email, password } = params;

  await validateUniqueEmail(email);

  const hashPassword = await bcrypt.hash(password, 12);

  return userRepository.create({ name, email, password: hashPassword });
}

async function validateUniqueEmail(email: string) {
  const findEmail = await userRepository.findByEmail(email);
  if (findEmail) throw duplicatedEmailError();
}

export const userService = {
  signIn,
  createUser,
};

export default userService;
