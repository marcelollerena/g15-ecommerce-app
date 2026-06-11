import { useEffect, useState } from "react";
import { getProductById } from "../services/get-product-by-id";

export function useGetProductById({ productId }) {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getProductById(productId)
      .then(setProduct)
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, [productId]);

  return {
    product,
    loading,
    error,
  };
}
