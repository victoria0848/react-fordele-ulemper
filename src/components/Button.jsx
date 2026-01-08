import styles from "./Button.module.scss";

export const Button = ({ action, size, theme, text }) => {
  return (
    <button
      onClick={action}
      className={`${styles.button} ${styles[size]} ${styles[theme]}`}
    >
      {text}
    </button>
  );
};