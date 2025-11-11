import express, { Request, Response } from "express";

const app = express();

app.use(express.json());

const port: number = 3000;

export const dataArray = [
  { id: 1, name: "azerty" },
  { id: 2, name: "object" },
  { id: 3, name: "waffle" },
];

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.get("/data", (req: Request, res: Response) => {
  res.send(dataArray);
});

app.get("/data/:id", (req: Request, res: Response) => {
  const id = parseInt(req.params.id);

  res.send(dataArray[dataArray.findIndex((data) => data.id === id)]);
});

app.listen(port, () => {
  console.log(`App is listening on port 3000`);
});
