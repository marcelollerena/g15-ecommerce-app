import { useParams } from "react-router";
import { useGetProductById } from "../../hooks/use-get-product-by-id";

import styles from "./product.module.css";
import { Minus, Plus, Star, User } from "lucide-react";
import { RoundNumber } from "../../../../common/utils/round-number";
import { Button } from "../../../../common/components/button/button";
import { useCartStore } from "../../store/use-cart-store";

export function ProductPage() {
  const { id } = useParams();

  const { product, loading, error } = useGetProductById({ productId: id });
  const { items, addItem, removeItem } = useCartStore();

  if (error) return <h1>{error}</h1>;

  if (loading) return <h1>Loading...</h1>;

  const {
    price,
    image,
    title,
    description,
    category,
    rating: { rate, count },
  } = product;

  const productQuantity = items.find((item) => item.id === product.id);

  return (
    <div className={styles.container}>
      <div className={styles.left_side}>
        <img src={image} alt={title} />
        <p>{description}</p>
      </div>

      <div className={styles.right_side}>
        <h3>{title}</h3>
        <h4>{category}</h4>

        <div className={styles.stats}>
          <span>
            {Array.from({ length: 5 }).map((_, index) => (
              <Star className={index < RoundNumber(rate) && styles.fillStar} />
            ))}
          </span>

          <span>
            <User /> {count}
          </span>

          <span>Price: S./ {price}</span>
        </div>

        <div className={styles.controls}>
          <Button callback={() => addItem(product)}>
            <Plus />
          </Button>
          {productQuantity ? productQuantity.quantity : 0}
          <Button callback={() => removeItem(product.id)}>
            <Minus />
          </Button>
        </div>
      </div>
    </div>
  );
}
