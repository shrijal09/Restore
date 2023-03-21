import { useEffect, useState } from "react";
import "./styles.css";
import { Product } from "../models/products";
import Catalog from "../../features/Catalog";
import { Typography } from "@mui/material";

function App() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  function addProduct() {
    setProducts((prevState) => [
      ...prevState,
      {
        id: prevState.length + 101,
        name: "product" + (prevState.length + 1),
        price: 200.0,
        brand: "some-brand",
        description: "description",
        pictureUrl: "http://picsum.photos/200",
      },
    ]);
  }
  return (
    <>
      <Typography variant="h1">Re-Store</Typography>
      <Catalog products={products} addProduct={addProduct}></Catalog>
    </>
  );
}

export default App;
