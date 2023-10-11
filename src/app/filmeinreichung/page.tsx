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
        <div className={styles.desktopContainer}>
          <p>
            Ihr habt einen Kurzfilm produziert, den ihr auf dem Festival zeigen
            wollt? Dann reicht ihn bis zum 15. Oktober 2023 bei uns ein.
          </p>
          <p>
            Wichtigste Bedingung: Mindestens zwei Personen aus eurem Filmteam
            sind bereit, von Freitag bis Sonntag am Festival teilzunehmen und
            den Film persönlich eurem Publikum zu präsentieren. Wenn euer Film
            ausgewählt wird, übernehmen wir die Reisekosten.
          </p>
        </div>
      </div>
      <div className={styles.filmEinreichungCameraContainer}>
        <div className={styles.filmEinreichungCamera}>
          <Image src={filmEinreichungCamera} alt="old school film photo" />
        </div>
        <div className={styles.spotlightContainer}>
          <div className={styles.spotlight}>
            <svg
              width="297"
              height="161"
              viewBox="0 0 297 161"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d_1260_2009)">
                <path
                  d="M4 77L292.473 1.00002L292.473 153L4 77Z"
                  fill="#D5E7E3"
                  fill-opacity="0.33"
                  shape-rendering="crispEdges"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_1260_2009"
                  x="0.18638"
                  y="0.455197"
                  width="296.1"
                  height="159.627"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="3.26882" />
                  <feGaussianBlur stdDeviation="1.90681" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_1260_2009"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_1260_2009"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
            <p className={styles.deadlineText}>DEADLINE</p>
            <p className={styles.deadlineText}>15 Oktober</p>
            <div className={styles.filmeEinreichenButtonContainerOne}>
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
        </div>
      </div>
      <div className={styles.filmEinreichungMiddle}>
        {/* <h3>Filmeinreichung</h3>
        <p>
          Ihr wollt, dass wir euren Kurzfilm im Festival-Programm zeigen? Die
          Film-Einreichung ist kostenlos und erfolgt über das Einreichportal
          filmfestivals4u.
        </p>
        <p>Einsendeschluss ist der 15. Oktober 2023!</p> */}
        <div className={styles.filmeEinreichenButtonContainerTwo}>
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
      <div className={styles.bottomContainer}>
        <h3>Filmeinreichung</h3>
        <p>
          Ihr wollt, dass wir euren Kurzfilm im Festival-Programm zeigen? Die
          Film-Einreichung ist kostenlos und erfolgt über das Einreichportal
          filmfestivals4u.
        </p>
        <p>Einsendeschluss ist der 15. Oktober 2023!</p>
      </div>{" "}
      <div className={styles.buttonAndText}>
        
        <button type="button" className={styles.filmEinreichenButton}>
          Hier Film Einreichen
        </button>
        <p className={styles.bottomContainerText}>
          Über diese Schaltfläche werdet ihr auf die externe Seite von
          filmfestivals4u weitergeleitet.
        </p>
      </div>
    </>
  );
}
