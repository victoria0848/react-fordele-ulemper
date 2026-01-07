import styles from "./Header.module.scss";

export const Header = ({ children }) => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Velkommen til min React App</h1>
      {children}
    </header>
  );
};