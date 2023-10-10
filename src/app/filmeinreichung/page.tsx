import React from "react";
import styles from "../filmeinreichung.module.css";
import Link from "next/link";
import Image from "next/image";
import filmEinreichungCamera from "@/images/filmCamera.png";
// import filmClapper from "@/images/filmClapper.png";
import Submission from "../../components/submission";
import polygon1 from "@/images/Polygon 1.png";

export default function Filmeinreichung() {
  return (
    <>
      <div className={styles.filmeinreichungTopContainer}>
        <h1>Reicht eure Filme ein und kommt zum Festival</h1>
        <p>
          Ihr habt einen Kurzfilm produziert, den ihr auf dem Festival zeigen
          wollt? Dann reicht ihn bis zum 15. Oktober 2023 bei uns ein.
        </p>
        <p>
          Wichtigste Bedingung: Mindestens zwei Personen aus eurem Filmteam sind
          bereit, von Freitag bis Sonntag am Festival teilzunehmen und den Film
          persönlich eurem Publikum zu präsentieren. Wenn euer Film ausgewählt
          wird, übernehmen wir die Reisekosten.
        </p>
      </div>

      <div className={styles.filmEinreichungCamera}>
        <Image src={filmEinreichungCamera} alt="old school film photo" />
        <Image
          src={polygon1}
          alt="a triangle that is light"
          className={styles.polgyon}
        />
      </div>
      <div className={styles.filmEinreichungMiddle}>
        <h3>Filmeinreichung</h3>
        <p>
          Ihr wollt, dass wir euren Kurzfilm im Festival-Programm zeigen? Die
          Film-Einreichung ist kostenlos und erfolgt über das Einreichportal
          filmfestivals4u.
        </p>
        <p>Einsendeschluss ist der 15. Oktober 2023!</p>
        <div className={styles.filmeEinreichenButtonContainer}>
          <button type="button" className={styles.filmEinreichenButton}>
            <Link
              href="https://www.filmfestivals4u.net/einreichung.php?id=44"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className={styles.filmEinreichenButtonText}>
                Ihren Film einreichen
              </p>
            </Link>
          </button>
        </div>
      </div>
      <div className={styles.richtLinienContainer}>
        <h2>Richtlinien für die Einreichung:</h2>
        <p>Alle Genres und Formate sind zugelassen! 🎥</p>
      </div>
      <Submission />
      <div className={styles.filmClapperContainer}>
        {/* <Image src={filmClapper} alt="film clapper" /> */}
        <p className={styles.filmClapperText}>
          <span className={styles.filmClapperHeading}>
            Merken Sie sich Ihren Kalender vor:
          </span>{" "}
          Die Bewerbungsfrist für die Einreichung Ihres Films ist der 15.
          Oktober 2023. Reichen Sie Ihre Filme unbedingt vor diesem Datum ein,
          um für unser spannendes Programm mit talentierten jungen Filmemachern
          berücksichtigt zu werden! Denkt daran: Die Zukunft des Filmemachens
          liegt in euren Händen! Reicht eure Filme jetzt ein und lasst eurer
          Kreativität freien Lauf!
        </p>
      </div>
    </>
  );
}
