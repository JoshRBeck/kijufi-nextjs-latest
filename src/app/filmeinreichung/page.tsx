import styles from "../page.module.css";
import Link from "next/link";
import Image from "next/image";
import filmEinreichungCamera from "@/images/filmCamera.png.png";
import FilmClapper from "@/images/FilmClapper.png";
import Submission from "@/components/submssion";
import polygon1 from "@/images/Polygon 1.png";

export default function Filmeinreichung() {
  return (
    <>
      <div className={styles.filmeinreichungTopContainer}>
        <h1>Präsentieren Sie Ihren tollen Kurzfilm</h1>
        <h4>Die Einreichung ist absolut kostenlos und einfach!</h4>
        <p>
          Was wir brauchen ist: Zusammenhalt, Miteinander und viel Fantasie.
          Also weg mit den Grenzen im Kopf. Wir engagieren uns gegen Ausgrenzung
          und Diskriminierung. Wir schlagen Brücken der Begegnung, feiern
          Vielfalt und nehmen uns Freiheit. Die Freiheit, eigene Ideen zu haben,
          die Freiheit, mitzureden und die Freiheit, die Welt, in der wir leben,
          besser zu machen.
        </p>
      </div>
      <div className={styles.filmEinreichungCamera}>
        <Image src={filmEinreichungCamera} alt="old school film photo" />
        <Image src={polygon1} alt="a triangle that is light" className={styles.polgyon}/>
      </div>
      <div className={styles.richtLinienContainer}>
        <h2>Richtlinien für die Einreichung:</h2>
      </div>
      <Submission />
      <div className={styles.filmClapperContainer}>
        <Image src={FilmClapper} alt="film clapper" />
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
        <p className={styles.filmEinreichenText}>
          Wenn Sie auf diese Schaltfläche klicken, werden Sie auf die externe
          Seite filmfestivals4u weitergeleitet.
        </p>
      </div>
    </>
  );
}
