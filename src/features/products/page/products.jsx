import styles from "./products.module.css";

import { useProducts } from "../hooks/use-products";
import { ItemCard } from "../../../common/components/item-card/item-card";

export function ProductsPage() {
  const { products, loading, error } = useProducts();

  console.log(products);

  if (error) return <h1>{error}</h1>;

  if (loading) return <h1>Loading...</h1>;

  return (
    <div className={styles.container}>
      {products.map((product) => (
        <ItemCard product={product} />
      ))}
    </div>
  );
}
