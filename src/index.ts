import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const server: string = process.env.APP_HOST || "localhost";
const port: number = Number(process.env.APP_PORT) || 9000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
})

app.listen(port, () => {
  console.log(`[Server]: Server is Running at ${server}:${port}`);
});