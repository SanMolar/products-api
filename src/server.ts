import express, { type Express, type Request, type Response } from "express";

const app: Express = express();

const port = 3000;

app.get("/", (_req: Request, res: Response) => {
  res.send("Mi primera API está funcionando");
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
