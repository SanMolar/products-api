import express, { type Express, type Request, type Response } from "express";

const app: Express = express();

const port = 3000;

app.get("/", (_req: Request, res: Response) => {
  res.send("Mi primera API está funcionando");
});

app.get("/products", (_req: Request, res: Response) => {
  res.json({
    message: "Lista de productos",
    products: [
      { id: 1, name: "Teclado", price: 500 },
      { id: 2, name: "Mouse", price: 300 },
    ],
  });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
