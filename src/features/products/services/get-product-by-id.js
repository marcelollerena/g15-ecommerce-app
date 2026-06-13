export const getProductById = async (productId) => {
  const response = await fetch(
    `https://fakestoreapi.com/products/${productId}`,
  );

  if (!response.ok) {
    throw new Error(`Error getting the product with id ${productId}`);
  }

  return response.json();
};
