import styles from './MyGrid.jsx.module.css';

export function MyGrid() {
    return (
        <div className={styles.container}>
          <header className={styles.header1} />
          <header className={styles.header2}/>
          <aside className={styles.aside}/>
          <div className={styles.main}>

          </div>
          <footer className={styles.footer} />
        </div>
    )
}
   