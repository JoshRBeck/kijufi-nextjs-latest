import styles from "../page.module.css";
import Image from "next/image";
import Flyer from "@/images/Flyer.png";
import Schedule from "@/components/schedule";

export default function Programm() {
  return (
    <div>
      <div className={styles.programmHeadingContainer}>
        <h1 className={styles.programmHeading}>
          Unser Programm für Filmemacher
        </h1>
        <p className={styles.programmHeadingText}>
          🕘 : Startzeit 🎬 : Filmvorführungen 🥳 : Festival 📍 : Standort
        </p>
      </div>
      <Schedule />
      <div className={styles.essenKarte}>
        <h1 className={styles.essenKarteHeading}>ESSEN & GETRÄNKE</h1>
      </div>
      <div className={styles.flyerContainer}>
        <h1 className={styles.flyerHeader}>
          Das Programm für die Organisation des Festivals
        </h1>
        <Image src={Flyer} alt="Flyer" className={styles.flyerImage} />
      </div>
    </div>
  );
}
