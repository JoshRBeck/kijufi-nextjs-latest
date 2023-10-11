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
        <svg
        className={styles.backgroundSvg}
          xmlns="http://www.w3.org/2000/svg"
          width="1440"
          height="343"
          viewBox="0 0 1440 343"
          fill="none"
          
        >
          <path
            d="M-14 56.6998C38.7387 56.6998 90.9006 57.3773 139.545 71.61C221.912 95.7094 269.05 143.293 301.62 193.874C324.027 228.669 343.848 283.608 329.039 321.356C324.401 333.178 286.375 334.505 271.46 334.961C220.062 336.533 219.004 290.022 238.862 268.424C275.791 228.261 375.352 258.767 426.528 263.206C508.636 270.328 612.964 233.782 637.348 183.436C653.834 149.397 636.25 79.2023 553.873 87.2657C506.992 91.8546 513.215 155.861 527.368 173.931C561.919 218.043 678.912 236.802 751.897 229.658C837.675 221.262 845.511 171.754 829.279 130.505C811.956 86.484 791.6 30.431 880.766 13.6467C977.9 -4.63766 1070.59 22.9219 1119.31 75.5239C1164.9 124.739 1256.7 225.093 1136.98 261.715C1081.18 278.784 1054.95 221.859 1051.07 197.601C1041.08 135.16 1149.48 133.292 1227.77 134.419C1309.56 135.597 1383.99 166.662 1464.48 166.662C1491.06 166.662 1477.58 55.7805 1477.58 36.5711"
            stroke="#DEECE9"
            stroke-opacity="0.5"
            stroke-width="15"
            stroke-linecap="round"
          />
        </svg>
        <svg
        
          xmlns="http://www.w3.org/2000/svg"
          width="1440"
          height="338"
          viewBox="0 0 1440 338"
          fill="none"
        >
          <path
            d="M-42 245.472C-42 234.873 -32.092 227.287 -23.5459 218.392C6.13904 187.497 33.9419 155.677 69.7942 127.244C130.715 78.9324 229.007 25.3724 328.953 12.3191C384.324 5.08748 443.212 3.66885 480.063 34.6107C509.185 59.0632 524.069 104.356 496.11 131.207C478.161 148.446 427.042 157.633 397.153 146.729C362.805 134.198 375.858 112.075 408.386 104.458C471.959 89.5697 522.251 115.313 564.577 141.445C615.283 172.751 678.427 212.697 686.534 259.177C689.659 277.09 685.765 318.117 653.37 327.208C603.143 341.304 612.863 298.153 633.044 284.111C690.995 243.789 794.275 238.278 875.354 231.932C912.111 229.056 988.218 214.323 988.218 247.949C988.218 253.686 985.965 257.87 974.845 257.361C954.532 256.432 942.091 225.148 938.205 216.906C928.083 195.441 920.63 171.661 931.518 149.701C945.962 120.571 1003.55 97.6079 1041.17 80.3496C1137.27 36.2661 1245.87 10.6679 1365.59 10.6679C1406.48 10.6679 1448.27 11.4298 1460 40.39"
            stroke="#E16848"
            stroke-opacity="0.06"
            stroke-width="15"
            stroke-linecap="round"
          />
        </svg>
      </div>
    </>
  );
}
