import { useParams } from "react-router";
import { useGetProductById } from "../../hooks/use-get-product-by-id";

import styles from "./product.module.css";
import { Star, User } from "lucide-react";
import { RoundNumber } from "../../../../common/utils/round-number";

export function ProductPage() {
  const { id } = useParams();

  const { product, loading, error } = useGetProductById({ productId: id });

  console.log(product);

  const {
    image,
    title,
    description,
    category,
    rating: { rate, count },
  } = product;

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
            {/* {Array.from({ length: 5 }).map((_, index) => {
              <Star
                className={index <= RoundNumber(rate) && styles.fillStar}
              />;
            })} */}
          </span>

          <span>
            <User />: {count}+
          </span>
        </div>
      </div>
    </div>
  );
}
