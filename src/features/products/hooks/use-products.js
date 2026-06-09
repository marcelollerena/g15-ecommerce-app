import { useEffect, useState } from "react";
import { getProducts } from "../services/get-products";

export function useProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getProducts()
      .then(setProducts)
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  }, []);

  return {
    error,
    loading,
    products,
  };
}
