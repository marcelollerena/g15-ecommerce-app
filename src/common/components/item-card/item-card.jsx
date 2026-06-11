import { Star } from "lucide-react";
import { Button } from "../button/button";
import styles from "./item-card.module.css";
import { RoundNumber } from "../../utils/round-number";
import { Link } from "react-router";

export function ItemCard({ product }) {
  const {
    id,
    title,
    price,
    description,
    rating: { rate },
    image,
  } = product;

  return (
    <Link
      to={`/product/${id}`}
      className={styles.container}
      style={{ justifySelf: "flex-end" }}
    >
      <div className={styles.rate}>
        <Star style={{ fill: "oklch(85.2% 0.199 91.936)" }} />{" "}
        {RoundNumber(rate)}
      </div>

      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>

      <Button>
        <p className={styles.price}>s/.{price}</p>
      </Button>
    </Link>
  );
}
