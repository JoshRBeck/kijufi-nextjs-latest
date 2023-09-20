import styles from "../page.module.css";
import Image from "next/image";
import filmTheater from "@/images/filmtheateramfriedrichshain.jpg";

export default function Kontakt() {
  return (
    <div>
      {/* Box for Filmvorführungen */}
      <div className={styles.box}>
        <h1 className={styles.boxTitle}>Für die Filmvorführungen!</h1>
        <div className={styles.boxImage}>
          <Image
            src={filmTheater}
            alt="film theater"
            className={styles.boxImageContent}
          />
        </div>
      </div>

      {/* Box for Festival */}
      <div className={styles.box}>
        <h1 className={styles.boxTitle}>Für das Festival!</h1>
        <div className={styles.boxContent}>Temporary Box</div>
      </div>
    </div>
  );
}
