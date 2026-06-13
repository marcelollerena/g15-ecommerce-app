import { Link } from "react-router";
import styles from "./navbar.module.css";
import { CartCounter } from "../cart-counter/cart-counter";

export function Navbar() {
  return (
    <header>
      <nav className={styles.container}>
        <Link to="/" className={styles.link}>
          Home
        </Link>
        <Link to="/products" className={styles.link}>
          Products
        </Link>

        <CartCounter />
      </nav>
    </header>
  );
}
