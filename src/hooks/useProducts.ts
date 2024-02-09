import { useEffect, useState } from "react";
import { getAllProducts } from "../services/products";

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    (async () => {
      setProducts(await getAllProducts());
    })();
  }, []);

  return { products };
}
