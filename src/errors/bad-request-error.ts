import { ApplicationError } from "@/protocols/protocols";

export function badRequestError(): ApplicationError {
  return {
    name: "BadRequestError",
    message: "Bad Request Error!",
  };
}
