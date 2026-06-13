import { ChevronRight } from "lucide-react";
import { ModalItem } from "./modal-item";
import styles from "./modal.module.css";
import { Link } from "react-router";

export function Modal({ products }) {
  return (
    <div className={styles.container}>
      <Link to={"/checkout"} className={styles.redirectBtn}>
        Go to cart <ChevronRight />
      </Link>

      {products.map((product) => (
        <ModalItem product={product} />
      ))}
    </div>
  );
}
