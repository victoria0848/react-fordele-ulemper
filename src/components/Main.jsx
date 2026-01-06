import styles from "./Main.module.scss";

export const Main = () => {
  return (
    <main className={styles.main}>
      <p className={styles.text}>
        Dette er hovedindholdet af appen.
      </p>
    </main>
  );
};