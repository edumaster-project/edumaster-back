import express from "express";
import cors from "cors";
import { handleApplicationErrors } from "./middlewares";

const app = express();

app
  .use(cors())
  .use(express.json())
  .get("/health", (_req, res) => res.send("Hello world!"))
  .use("/users")
  .use(handleApplicationErrors);

app.listen(4000, () => {
  console.log("server running in port 4000");
});
