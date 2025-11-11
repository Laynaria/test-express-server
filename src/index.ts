import express, { Request, Response } from "express";

const app = express();

app.use(express.json());

const port: number = 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`App is listening on port 3000`);
});
