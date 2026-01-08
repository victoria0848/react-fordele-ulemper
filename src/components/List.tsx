import styles from "./List.module.scss";

type ListProps = {
  title: string;
  items: string[];
};

export const List = ({ title, items }: ListProps) => {
  return (
    <section className={styles.listSection}>
      <h2 className={styles.title}>{title}</h2>
      <ul className={styles.list}>
        {items.map((item, index) => (
          <li className={styles.item} key={index}>
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
};