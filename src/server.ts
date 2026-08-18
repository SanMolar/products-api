import express, { type Express, type Request, type Response } from "express";

const app: Express = express();

const port = 3000;

interface Product {
  id: number;
  name: string;
  price: number;
}

const products: Product[] = [
  { id: 1, name: "Teclado", price: 500 },
  { id: 2, name: "Mouse", price: 300 },
];

app.get("/", (_req: Request, res: Response) => {
  res.send("Mi primera API está funcionando");
});

app.get("/products", (_req: Request, res: Response) => {
  res.json({
    message: "Lista de productos",
    products: products,
  });
});

const getProductById = (
  req: Request<{ receivedId: string }>,
  res: Response,
) => {
  const receivedId = req.params.receivedId;
  const numericId = Number(receivedId);

  const productFound = products.find((product) => product.id === numericId);
  console.log(productFound);
  console.log(numericId, typeof numericId);
  if (productFound === undefined){
      return res.status(404).json({message: "Producto no encontrado"});

    } 
  res.json(productFound);
};

app.get("/products/:receivedId", getProductById);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
