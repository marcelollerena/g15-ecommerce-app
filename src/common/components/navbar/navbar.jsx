import { Link } from "react-router";
import styles from "./navbar.module.css";

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
        <Link to="/carrito" className={styles.link}>
          Carrito
        </Link>
      </nav>
    </header>
  );
}
