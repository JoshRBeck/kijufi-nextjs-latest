import Image from "next/image";
import styles from "./page.module.css";
import Chair from "@/images/chair.png";
import Camera from "@/images/camera.png";
import HeadingNeu from "../images/heading_neu.png";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className="title-container">
        <h1 className="title">Gemeinsam Grenzenlos</h1>
        <br></br>
        <p className="kinder-festival">Das Kinderrechte-Filmfestival 2023</p>
      </div>
      <div className="tiled-container">
        <div className="tile1">
          <Image src={Chair} alt="chair" className="chair-image" />
        </div>
        <div className="tile2"></div>
        <div className="tile3">
          <Image src={Camera} alt="camera-image" />
        </div>
        <div className="tile4"></div>
      </div>
      <Image src={HeadingNeu} alt="New heading" className="heading-neu" />
    </main>
  );
}
