import React from "react";
import Image from "next/image";
import styles from "./page.module.css";
import Chair from "@/images/chair.png";
import Camera from "@/images/camera.png";
import HeadingNeu from "../images/heading_neu.png";
import Countdown from "@/components/countdown";

export default function Home() {
  return (
    // <Suspense fallback={<div>Loading...</div>}>
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
      <Countdown />
    </main>
    // </Suspense>
  );
}
