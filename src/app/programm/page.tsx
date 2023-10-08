import React from "react";
import styles from "../programm.module.css"
import Image from "next/image";
import Flyer from "@/images/Flyer.png";
import Schedule from "../../components/schedule";
import garland1 from "@/images/garland 1.png";
import garland2 from "@/images/garland 2.png";
import garland3 from "@/images/garland 3.png";

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
        {/* <Image
          src={garland1}
          alt="first of the garlands"
          className={styles.garland}
        /> */}
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
