import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import Chair from "@/images/chair.png";
import Camera from "@/images/camera.png";
import HeadingNeu from "@/images/heading_neu.png";
import Countdown from "../components/countdown";
import CoolKids1 from "@/images/Cool-Kids-Research.png";
import CoolKids2 from "@/images/Cool-Kids-Feedback.png";
import WirSindGrenzenlos1 from "@/images/Wir-Sind-Grenzenlos1.png";
import gemeinsamgrenzenlos from "@/images/Gemeinsam-Grenzenlos.png";
import position3 from "@/images/position-1-erdkugel-mit-menschen-und-klappe.png";
import MovieCut from "@/images/moviecut.png";
import CarouselComponent from "../components/carousel";
import Yorck from "@/images/Yorck-Kinogruppe.png";
import MPower from "@/images/MPower-e.V..png";
import Songs from "@/images/Songs-for-Rights.png";
import IYCE from "@/images/IYCE.png";
import StadtBibliothek from "@/images/Stadtbibliothek-Berlin-Mitte.png";
import Head from "next/head";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.tileWrapper}>
        <div className={styles.tiledContainer}>
          <div className={styles.tile1}>
            <Image src={Chair} alt="Chair photo for main page" />
          </div>
          <div className={styles.tile2}></div>
          <div className={styles.tile3}></div>
          <div className={styles.tile4}>
            <Image src={Camera} alt="Camera photo for main page" />
          </div>
          <div className={styles.centerImage}>
            <Image src={HeadingNeu} alt="heading photo for main page" />
          </div>
        </div>
      </div>
      <Countdown />
      <div className={styles.aboutSection}>
        <h2 className={styles.aboutHeader}>Über das Festival</h2>
        <p className={styles.aboutParagraph}>
          Gemeinsam Grenzenlos ist ein Film-Festival für alle Generationen:
          Junge Filmemacher:innen sind eingeladen, mit ihren Ideen und
          Überzeugungen ins Spotlight zu treten. Sagt, was ihr zu sagen habt.
          Zeigt, was euch bewegt und was euch wichtig ist! Auch ohne Film sind
          Kinder und Jugendliche eingeladen, als Zuschauer:innen Teil eines
          vibrierenden Festivalerlebnisses zu werden. Trefft auf engagierte
          Gleichaltrige. Lasst euch inspirieren. Alle Erwachsenen! Kommt – denn
          ihr seid genauso eingeladen. Ihr seid der Teil von Gemeinsam, der
          Grenzen setzen, aber auch loswerden kann.
        </p>
        <h5 className={styles.aboutWarning}>
          ⚠️ Achtung! Der Ticketverkauf startet Anfang November 2023
        </h5>
        <button type="button" className={styles.programmButtonAboutSection}>
          <Link href="/programm">Programm</Link>
        </button>
      </div>
      <div className={styles.freiheitTextContainer}>
        <div className={styles.freiheitImage}>
          <Image
            src={CoolKids1.src} 
            alt="cool kids research"
            width={CoolKids1.width} 
            height={CoolKids1.height} 
          />
        </div>
        <div className={styles.freiheitText}>
          <h2>#Fantasie #Miteinander</h2>
          <p>
            Was wir brauchen ist: Zusammenhalt, Miteinander und viel Fantasie.
            Also weg mit den Grenzen im Kopf.
          </p>
        </div>
      </div>
      <div className={styles.freiheitImageContainer}>
        <div>
          <Image
            src={WirSindGrenzenlos1.src} 
            alt="We are borderless"
            width={WirSindGrenzenlos1.width} 
            height={WirSindGrenzenlos1.height} 
            className={styles.WirSindGrenzenlos1}
          />
        </div>
        <div>
          <Image
            src={gemeinsamgrenzenlos.src} 
            alt="We are borderless"
            width={gemeinsamgrenzenlos.width} 
            height={gemeinsamgrenzenlos.height} 
            className={styles.gemeinsamgrenzenlos}
          />
        </div>
        <div>
          <Image
            src={position3.src}
            alt="erd kugel mit klappe"
            width={312}
            height={312}
            className={styles.position3}
          />
        </div>
      </div>
      <div className={styles.zusammenheitContainer}>
        <div className={styles.zusammenheitText}>
          <h4>#Freiheit Leben</h4>
          <p>
            Wir engagieren uns gegen Ausgrenzung und Diskriminierung. Wir
            schlagen Brücken der Begegnung, feiern Vielfalt und nehmen uns
            Freiheit. Die Freiheit, eigene Ideen zu haben, die Freiheit,
            mitzureden und die Freiheit, die Welt, in der wir leben, besser zu
            machen.
          </p>
        </div>
        <div className={styles.zusammenheitImage}>
          <Image
            src={CoolKids2}
            alt="Cool kids Feedback"
            width={CoolKids2.width}
            height={CoolKids2.height}
            className={styles.coolkids2}
          />
        </div>
      </div>
      <div className={styles.mainPageKontaktContainer}>
        <div className={styles.mainPageKontaktImage}>
          <Image
            src={MovieCut}
            alt="Movie cut image"
            width={120}
            height={120}
            className={styles.movieCut}
          />
        </div>
        <div className={styles.mainPageKontaktText}>
          <h3 className={styles.mainPageText}>Werde Teil der Festival-Crew</h3>
          <p>
            Das Filmfestival wird maßgeblich von Kindern und Jugendlichen
            veranstaltet. Die junge Festival-Crew trifft alle wichtigen
            Entscheidungen – vom Titel und Thema des Festivals über die
            Filmauswahl bis hin zum Rahmenprogramm. Sie sind es auch, die das
            Festival hosten: als Filmvorführer:innen, Moderator:innen,
            Presse-Sprecher:innen und Gäste-Betreuer:innen.
          </p>
          <br></br>
          <p>Du willst mitmachen? Melde Dich bei uns und komm‘ vorbei!</p>
          <button type="button" className={styles.infoFestivalButton}>
            Info Festival-Crew
          </button>
        </div>
      </div>
      <div className={styles.mainPageFilmEinreichen}>
        <h4>Reicht eure Filme ein und kommt zum Festival</h4>
        <p>
          Ihr habt einen Kurzfilm produziert, den ihr auf dem Festival zeigen
          wollt? Dann reicht ihn bis zum 15. Oktober 2023 bei uns ein.<br></br>
          Wichtigste Bedingung: Mindestens zwei Personen aus eurem Filmteam sind
          bereit, von Freitag bis Sonntag am Festival teilzunehmen und den Film
          persönlich eurem Publikum zu präsentieren. Wenn euer Film ausgewählt
          wird, übernehmen wir die Reisekosten.
        </p>
        <button type="button" className={styles.FilmeinreichungButton}>
          Filmeinreichung
        </button>
      </div>
      <div className={styles.sponsorsContainer}>
        <h4 className={styles.sponsorHeading}>Unsere Partner</h4>
        {/* <CarouselComponent /> */}
        {/* <Image
            src={Yorck}
            alt="Yorck KinoGruppe"
            width={Yorck.width}
            height={Yorck.height}
            className={styles.Yorck}
          />
          <Image
            src={MPower}
            alt="MPower sponsor"
            width={MPower.width}
            height={MPower.height}
            className={styles.MPower}
          />
          <Image
            src={Songs}
            alt="Songs sponsor"
            width={Songs.width}
            height={Songs.height}
            className={styles.Songs}
          />
          <Image
            src={IYCE}
            alt="IYCE sponsor"
            width={IYCE.width}
            height={IYCE.height}
            className={styles.IYCE}
          />
          <Image
            src={StadtBibliothek}
            alt="StadtBibliothek sponsor"
            width={StadtBibliothek.width}
            height={StadtBibliothek.height}
            className={styles.StadtBibliothek}
          /> */}
      </div>
    </main>
  );
}
