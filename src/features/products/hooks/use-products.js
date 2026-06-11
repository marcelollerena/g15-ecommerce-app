import { useEffect, useState } from "react";
import { getProducts } from "../services/get-products";

export function useProducts() {
  const [products, setProducts] = useState([]); // Estado para guardar productos
  const [loading, setLoading] = useState(true); // Estado para manejar la carga de productos
  const [error, setError] = useState(null); // Estado de error al traer productos

  useEffect(() => {
    getProducts()
      .then((data) => setProducts(data))
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  }, []);

  return {
    error,
    loading,
    products,
  };
}
