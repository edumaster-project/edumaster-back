import { ApplicationError } from "@/protocols/protocols";

export function invalidCredentialsError(): ApplicationError {
  return {
    name: "InvalidCredentialsError",
    message: "Email or password are incorrect",
  };
}
