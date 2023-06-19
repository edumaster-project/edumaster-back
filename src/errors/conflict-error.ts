import { ApplicationError } from "@/protocols/protocols";

export function conflictError(message: string): ApplicationError {
  return {
    name: "ConflictError",
    message,
  };
}
