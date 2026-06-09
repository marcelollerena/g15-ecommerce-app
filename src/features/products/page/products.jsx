import { useProducts } from "../hooks/use-products";

export function ProductsPage() {
  const { products, loading, error } = useProducts();

  if (error) return <h1>{error}</h1>;

  if (loading) return <h1>Loading...</h1>;

  return products.map((product) => (
    <div>
      <h3>{product.title}</h3>
      <h5>{product.price}</h5>
      <p>{product.description}</p>
    </div>
  ));
}
