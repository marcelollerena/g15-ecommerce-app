import styles from "./button.module.css";

export function Button({ callback, children }) {
  return (
    <button onClick={() => callback()} className={styles.container}>
      {children}
    </button>
  );
}
