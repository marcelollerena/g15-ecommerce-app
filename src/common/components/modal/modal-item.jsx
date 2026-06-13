import { Link } from "react-router";
import styles from "./modal-item.module.css";
import { Trash } from "lucide-react";
import { useCartStore } from "../../../features/products/store/use-cart-store";

export function ModalItem({ product }) {
  const { image, title, quantity, id } = product;

  return (
    <Link to={`/product/${id}`} className={styles.container}>
      <img src={image} alt={title} />

      <h4>{title}</h4>

      <p>{quantity}</p>
    </Link>
  );
}

export function ModalItemComponent({ product }) {
  const { clearItem } = useCartStore();
  const { image, title, quantity, id } = product;

  return (
    <div className={styles.container}>
      <img src={image} alt={title} />

      <h4>{title}</h4>

      <p>{quantity}</p>

      <Trash size={16} color="red" onClick={() => clearItem(id)} />
    </div>
  );
}
