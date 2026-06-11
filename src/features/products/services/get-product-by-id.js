export const getProductById = async (productId) => {
  const response = await fetch(
    `https://fakestoreapi.com/products/${productId}`,
  );

  if (!response.ok) {
    throw new Error(`Error getting the product with id ${productId}`);
  }

  console.log(response);

  return response.json();
};
