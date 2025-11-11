import express, { Request, Response } from "express";
import { dataType } from "./dataType";

const app = express();

app.use(express.json());

const port: number = 3000;

export const dataArray: dataType[] = [
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

app.post("/data", (req: Request, res: Response) => {
  const ids: number[] = dataArray.map<number>((data) => data.id);

  const additionnalData: dataType = { id: Math.max(...ids) + 1, ...req.body };

  dataArray.push(additionnalData);
  res.send(dataArray);
});

app.listen(port, () => {
  console.log(`App is listening on port 3000`);
});
