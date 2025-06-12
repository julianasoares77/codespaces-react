import styles from "./MyDesafio.module.css";

export function MyDesafio() {
  return (
    <div className={styles.container}>
      <header className={styles.header1}></header>
      <header className={styles.header2}></header>
      <aside className={styles.asideLeft}></aside>
      <aside className={styles.asideRight}></aside>
      <div className={styles.main}>
        <div className={styles.grid}>
          <div className={styles.card}>
            <h2>Card 1</h2>
            <p>This is the first card.</p>
          </div>
          <div className={styles.card}>
            <h2>Card 2</h2>
            <p>This is the second card.</p>
          </div>
          <div className={styles.card}>
            <h2>Card 3</h2>
            <p>This is the third card.</p>
          </div>
          <div className={styles.card}>
            <h2>Card 4</h2>
            <p>This is the fourth card.</p>
          </div>
          <div className={styles.card}>
            <h2>Card 5</h2>
            <p>This is the fifth card.</p>
          </div>
        </div>
      </div>
      <footer className={styles.footer}></footer>
      <footer className={styles.footer2}></footer>
    </div>
  );
}