import styles from "./cart-counter.module.css";

import { Handbag } from "lucide-react";
import { useCartStore } from "../../../features/products/store/use-cart-store";
import { Modal } from "../modal/modal";
import { useState } from "react";

export function CartCounter() {
  const { items } = useCartStore();
  const [isOpen, setIsOpen] = useState(false);

  const totalProducts = items.reduce((acc, item) => {
    return acc + item.quantity;
  }, 0);

  return (
    <div className={styles.container}>
      <div className={styles.counter}>{totalProducts}</div>
      <Handbag onClick={() => setIsOpen(!isOpen)} className={styles.handbag} />

      {isOpen && <Modal products={items} />}
    </div>
  );
}
