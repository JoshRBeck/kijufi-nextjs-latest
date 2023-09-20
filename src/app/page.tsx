"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Chair from "@/images/chair.png";
import Camera from "@/images/camera.png";
import HeadingNeu from "../images/heading_neu.png";
import { useEffect, useState } from "react";
// import RootLayout from "./layout";

export default function Home() {
  const [countdownValue, setCountdownValue] = useState("");

  useEffect(() => {
    const targetDate = new Date("2023-12-08T10:00:00").getTime();
    const countdown = setInterval(function () {
      const currentDate = new Date().getTime();
      const timeRemaining = targetDate - currentDate;
      const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
      const formattedCountdown = `${days} Tage ${hours} Stunden ${minutes} Minuten ${seconds} Sekunden`;

      setCountdownValue(formattedCountdown);

      if (timeRemaining <= 0) {
        clearInterval(countdown);
        setCountdownValue("Das Festival hat begonnen");
      }
    }, 1000);
    return () => {
      clearInterval(countdown);
    };
  }, []);

  return (
    <main className={styles.main}>
      <div>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>Gemeinsam Grenzenlos</h1>
          <br></br>
          <p className={styles.kinderFestival}>
            Das Kinderrechte-Filmfestival 2023
          </p>
        </div>
        <div className={styles.tiledContainer}>
          <div className={styles.topTiles}>
            <div className={styles.tile1}>
              <Image src={Chair} alt="chair" className={styles.chairImage} />
            </div>
            <div className={styles.tile2}></div>
          </div>
          <div className={styles.tile3}>
            <Image
              src={Camera}
              alt="camera image"
              className={styles.cameraImage}
            />
          </div>
          <div className={styles.tile4}></div>
        </div>
        <Image
          src={HeadingNeu}
          alt="New heading"
          className={styles.headingNeu}
        />
      </div>
      <div className={styles.countdownContainer}>
        <div id="countdownContainer">
          <p className={styles.countdownNumbers}>{countdownValue}</p>
        </div>
      </div>
    </main>
  );
}
