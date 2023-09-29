import React from "react";
import Image from "next/image";
import styles from "./page.module.css";
import Chair from "@/images/chair.png";
import Camera from "@/images/camera.png";
import HeadingNeu from "@/images/heading_neu.png";
import Countdown from "../components/countdown";
import CoolKids1 from "@/images/Cool-Kids-Research.png";
import CoolKids2 from "@/images/Cool-Kids-Feedback.png";
import WirSindGrenzenlos1 from "@/images/Wir-Sind-Grenzenlos1.png";
import WirSindGrenzenlos2 from "@/images/Wir-Sind-Grenzenlos2.png";
import MovieCut from "@/images/moviecut.png";
import Yorck from "@/images/Yorck-Kinogruppe.png";
import MPower from "@/images/MPower-e.V..png";
import Songs from "@/images/Songs-for-Rights.png";
import IYCE from "@/images/IYCE.png";
import StadtBibliothek from "@/images/Stadtbibliothek-Berlin-Mitte.png";

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>Gemeinsam Grenzenlos</h1>
          <p className={styles.kinderFestival}>
            Das Kinderrechte-Filmfestival 2023
          </p>
        </div>
        <div className={styles.tiledContainer}>
          <div className={styles.topTiles}>
            <div className={styles.tile1}></div>
            <div className={styles.tile2}></div>
          </div>
          <div className={styles.bottomTiles}>
            <div className={styles.tile3}></div>
            <div className={styles.tile4}></div>
          </div>
        </div>
        <Countdown />
        <div className={styles.aboutSection}>
          <h2 className={styles.aboutHeader}>Über das Festival</h2>
          <p className={styles.aboutParagraph}>
            Dieses Festival ist eine Veranstaltung, die von jungen Menschen
            selbst organisiert wird. Das vom 8. bis 10. Dezember 2023
            stattfindende Festival will mit Hilfe des fesselnden Mediums Film
            die Rechte von Kindern feiern und sich für sie einsetzen. Im Rahmen
            des Festivals werden sechs von jungen Filmemachern erstellte
            Kurzfilme gezeigt, die zum Nachdenken anregen, Gespräche anregen und
            wichtige Themen beleuchten.
          </p>
          <h5 className={styles.aboutWarning}>
            ⚠️ Achtung! Tickets sind ab Anfang November erhältlich
          </h5>
          <button type="button" className={styles.aboutTicket}>
            Tickets
          </button>
        </div>
        <div className={styles.freiheitTextContainer}>
          <div className={styles.freiheitImage}>
            <Image
              src={CoolKids1.src} // Use .src to access the image source
              alt="cool kids research"
              width={CoolKids1.width} // Use .width to set the width
              height={CoolKids1.height} // Use .height to set the height
            />
          </div>
          <div className={styles.freiheitText}>
            <h6>#Freiheit #Fantasie</h6>
            <p>
              Erleben Sie mit uns eine inspirierende und integrative
              Veranstaltung! Wir wünschen uns Zusammenhalt, Einigkeit und
              grenzenlose Fantasie von allen Teilnehmern.
            </p>
          </div>
        </div>
        <div className={styles.freiheitImageContainer}>
          <Image
            src={WirSindGrenzenlos1.src} // Use .src to access the image source
            alt="We are borderless"
            width={WirSindGrenzenlos1.width} // Use .width to set the width
            height={WirSindGrenzenlos1.height} // Use .height to set the height
            className={styles.WirSindGrenzenlos1}
          />
          <Image
            src={WirSindGrenzenlos2.src} // Use .src to access the image source
            alt="We are borderless"
            width={WirSindGrenzenlos2.width} // Use .width to set the width
            height={WirSindGrenzenlos2.height} // Use .height to set the height
            /* Dont forget to make the classNames correct */
            className={styles.WirSindGrenzenlos2}
          />
        </div>
        <div className={styles.zusammenheitContainer}>
          <div className={styles.zusammenheitText}>
            <h4>#Zusammenhalt #Leben</h4>
            <p>
              Gemeinsam werden wir Ausgrenzung und Diskriminierung bekämpfen,
              Vielfalt feiern und die Freiheit nutzen, um eine bessere Welt zu
              schaffen. Ihre einzigartigen Ideen und Ihre Stimme sind
              entscheidend für unseren gemeinsamen Erfolg!
            </p>
          </div>
          <div className={styles.zusammenheiImage}>
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
              width={MovieCut.width}
              height={MovieCut.height}
              className={styles.movieCut}
            />
          </div>
          <div className={styles.mainPageKontaktText}>
            <h3 className={styles.mainPageText}>
              Treten Sie einem Team junger Kreativer bei
            </h3>
            <p>
              Das Filmfestival wird maßgeblich von Kindern und Jugendlichen
              veranstaltet. Die junge Festival-Crew trifft alle wichtigen
              Entscheidungen – vom Titel und Thema des Festival Festivals über
              die Filmauswahl bis hin zur Festivalverpflegung. Sie sind es auch,
              die das Festival hosten: Als Filmvorführer:innen, Moderator:innen,
              Presse-Sprecher:innen und Gäste-Betreuer:innen. Du willst
              mitmachen? Melde Dich bei uns und komm‘ vorbei!
            </p>
            <button type="button">Kontakt</button>
          </div>
        </div>
        <div className={styles.mainPageFilmEinreichen}>
          <h4>Ihren Film Einreichen</h4>
          <p>
            Möchten Sie, dass wir Ihren unglaublichen Kurzfilm in unserem
            Festivalprogramm vorstellen? Das ist Ihre Chance, auf der großen
            Leinwand zu glänzen! Die Filmeinreichung ist absolut kostenlos und
            einfach. Für alle wichtigen Details, Bedingungen und spezifischen
            Anforderungen klicken Sie bitte hier, um mehr zu erfahren und
            sicherzustellen, dass Ihr Film die Anerkennung erhält, die er
            verdient. Wir können es kaum erwarten, die Talente zu sehen, die Sie
            zu unserem Festival mitbringen!
          </p>
          <button type="button">Filmeinreichung</button>
        </div>
        <div className={styles.sponsorsContainer}>
          <h4 className={styles.sponsorHeading}>
            Unsere Partner und Sponsoren
          </h4>
          <Image
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
          />
        </div>
      </div>
    </main>
  );
}
