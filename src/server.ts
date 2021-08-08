import express, { response } from "express";
import "reflect-metadata";
import { router } from "./routes";
import "./database";

//@types/express
const app = express();

app.use(express.json());
app.use(router);

//http://localhost:3000
app.listen(3000, () =>
  console.log("Server is running on http://localhost:3000")
);
