import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.copy}>
        © 2026 Min React App
      </p>
    </footer>
  );
};