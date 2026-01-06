import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Velkommen til min React App</h1>
    </header>
  );
};