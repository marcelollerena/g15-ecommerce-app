import styles from "./checkout.module.css";

import { useCartStore } from "../../products/store/use-cart-store";
import { RoundNumber } from "../../../common/utils/round-number";
import { Button } from "../../../common/components/button/button";
import { ModalItemComponent } from "../../../common/components/modal/modal-item";
import { useState } from "react";

export function CheckoutPage() {
  const { items } = useCartStore();

  const [email, setEmail] = useState("");

  const total = items.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  const onSubmit = () => {
    const data = {
      email,
      items,
      pago: total,
    };

    console.log(data);
  };

  return (
    <div className={styles.container}>
      <div className={styles.side_left}>
        <h2>Resumen de compra</h2>
        <div>
          {items.map((item) => (
            <ModalItemComponent product={item} />
          ))}
        </div>
      </div>

      <div className={styles.side_right}>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
          required
          type="email"
          name="email"
        />
        <Button callback={onSubmit}>
          Total a pagar: S/.{RoundNumber(total)}
        </Button>
      </div>
    </div>
  );
}
