import styles from "../page.module.css";

export default function Kontakt() {
  return (
    <div>
      <div className={styles.filmVorfuhrung}>
        <div>
          <h1>Für die Filmvorführungen!</h1>
        </div>
      </div>
      <div className={styles.filmFestival}>
        <div>
          <h1>Für das Festival!</h1>
        </div>
      </div>
    </div>
  );
}
