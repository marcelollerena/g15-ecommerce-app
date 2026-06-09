export const getProducts = async () => {
  const res = await fetch("https://fakestoreapi.com/products");

  if (!res.ok) {
    throw new Error("Error getting products");
  }

  return res.json();
};
