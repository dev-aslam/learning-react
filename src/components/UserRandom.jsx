import styles from "./users.module.scss";

export function UserRandom() {
  return (
    <section className={styles.randomTitle}>
      <p>Random</p>
      <ul>
        <li>Food</li>
        <li>cats</li>
        <li> sad</li>
      </ul>
    </section>
  );
}
