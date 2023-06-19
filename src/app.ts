import express, { Express } from "express";
import cors from "cors";
import { userRoutes } from "@/routers";
import { connectDb, disconnectDb, loadEnv } from "@/config";
import { handleApplicationErrors } from "@/middlewares";

const app = express();

loadEnv();

app
  .use(cors())
  .use(express.json())
  .get("/health", (_req, res) => res.send("Hello world!"))
  .use("/users", userRoutes)
  .use(handleApplicationErrors);

export function init(): Promise<Express> {
  connectDb();
  return Promise.resolve(app);
}

export async function close(): Promise<void> {
  await disconnectDb();
}

export default app;
