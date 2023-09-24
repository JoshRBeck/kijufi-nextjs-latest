"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import filmEinreichungCamera from "@/images/filmCamera.png.png";
import styles from "../page.module.css";

export default function Filmeinreichung() {
  const schritte = [
    {
      nummer: "01",
      name: "Mehrere Einreichungen",
      beschreibung:
        "Sie können bis zu drei Ihrer fertigen Filmarbeiten einreichen",
      colorClass: "schritteColorOne",
    },
    {
      nummer: "02",
      name: "Filmlänge",
      beschreibung:
        "Ihre Filme dürfen eine Länge von 10 Minuten nicht überschreiten.",
      colorClass: "schritteColorTwo",
    },
    {
      nummer: "03",
      name: "Datum der Fertigstellung der Produktion",
      beschreibung:
        "Wir nehmen Filme an, die nach dem 1. Januar fertiggestellt wurden.",
      colorClass: "schritteColorThree",
    },
    {
      nummer: "04",
      name: "Altersvoraussetzung",
      beschreibung:
        "Sie dürfen zum Zeitpunkt der Fertigstellung des Films nicht älter als 25 Jahre sein",
      colorClass: "schritteColorFour",
    },
    {
      nummer: "05",
      name: "Dateiformate",
      beschreibung:
        "Sie können Ihre Filme in jedem gängigen Dateiformat einreichen",
      colorClass: "schritteColorFive",
    },
    {
      nummer: "06",
      name: "Kostenlose",
      beschreibung:
        "Registrierung Die Einreichung von Filmen ist völlig kostenlos",
      colorClass: "schritteColorSix",
    },
    {
      nummer: "07",
      name: "Rechte-Zusicherung",
      beschreibung:
        "Sie versichern uns, dass Sie alle Bild- und Tonrechte an Ihrem Werk ohne Einschränkungen besitzen",
      colorClass: "schritteColorSeven",
    },
    {
      nummer: "08",
      name: "Teilnahme am Festival",
      beschreibung:
        "Wenn Sie ausgewählt werden, benötigen wir die Anwesenheit von mindestens zwei Filmemachern aus Ihrem Team",
      colorClass: "schritteColorEight",
    },
  ];
  const stepColors = [
    "#5BA092",
    "#F6CC5E",
    "#E16848",
    "#5BA092",
    "#F6CC5E",
    "#FFCAAF",
    "#D5E7E3",
    "#FAE8DF",
  ];
  function shuffleArray<T>(array: T[]): T[] {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  }
  const shuffledStepColors = shuffleArray(stepColors);
  /* More Information Button */
  const [showDetails, setShowDetails] = useState(false);
  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };
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
        <Image src={filmEinreichungCamera} alt="old school film photo"></Image>
      </div>
      <div className={styles.richtLinienContainer}>
        <h2>Richtlinien für die Einreichung:</h2>
        <div className={`${styles.schritte} ${styles.schritteContainer}`}>
          {schritte.map((step, index) => (
            <div
              className={`${styles.schritte} ${shuffledStepColors[index]}`}
              key={index}
            >
              <div className={styles.schritteNummer}>{step.nummer}</div>
              <div className={styles.schritteName}>{step.name}</div>
              <div className={styles.schritteBeschreibung}>
                {step.beschreibung}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <hr></hr>
        <button onClick={toggleDetails}>
          {showDetails
            ? "Weniger Einzelheiten zu den Bedingungen für die Einreichung"
            : "Mehr Details über die Bedingungen für die Einreichung"}
        </button>
        {showDetails && (
          <div>
            <p>Submission Guidelines:</p>
            <p>
              Mehrere Einreichungen: Als junger Regisseur oder Teil eines Teams
              können Sie bis zu drei Ihrer fertigen Filmarbeiten einreichen. So
              können Sie Ihre Vielseitigkeit unter Beweis stellen und Ihr Talent
              in verschiedenen Genres und Formaten zeigen.
            </p>
            <p>
              Filmlänge: Ihre Filme dürfen nicht länger als 10 Minuten sein. Wir
              glauben an die Kraft von kurzen Geschichten und möchten jedem eine
              faire Chance geben, vorgestellt zu werden.
            </p>
            <p>
              Datum der Fertigstellung der Produktion: Für das kommende Festival
              nehmen wir Filme an, die nach dem 1. Januar 2022 fertiggestellt
              wurden. Damit stellen wir sicher, dass wir frische und zeitgemäße
              Inhalte von unseren jungen Filmemachern präsentieren können.
            </p>
            <p>
              Altersvoraussetzung: Um für die Einreichung in Frage zu kommen,
              dürfen die Regisseure zum Zeitpunkt der Fertigstellung des Films
              nicht älter als 25 Jahre sein. Wir ermutigen unsere jungen
              Filmemacher, sich zu beteiligen und der Welt des Films ihren
              Stempel aufzudrücken.
            </p>
            <p>
              Dateiformate: Sie können Ihre Filme in jedem gängigen Dateiformat
              einreichen. Unser Einreichungsportal ermöglicht ein einfaches
              Hochladen von Dateien und gewährleistet so einen problemlosen
              Ablauf für alle Teilnehmer.
            </p>
            <p>
              Kostenlose Anmeldung: Wir glauben an die Förderung einer kreativen
              Gemeinschaft ohne Barrieren, deshalb ist die Einreichung von
              Filmen völlig kostenlos. Füllen Sie einfach die Registrierung auf
              unserem benutzerfreundlichen filmfestivals4u-Anmeldeportal aus.
            </p>
            <p>
              Rechte-Zusicherung: Mit der Einreichung Ihres Films versichern Sie
              uns, dass Sie alle Bild- und Tonrechte an Ihrem Werk
              uneingeschränkt besitzen. Damit ist sichergestellt, dass Ihre
              kreative Stimme während des gesamten Prozesses geschützt ist.
            </p>
            <p>
              Festival-Vorführung: Wenn Ihr Film für unser Festivalprogramm
              ausgewählt wird, müssen mindestens zwei Filmemacher aus Ihrem Team
              bei der Vorführung anwesend sein. Aber keine Sorge, wir haben für
              Sie vorgesorgt! Die Reisekosten, einschließlich der Unterkunft,
              werden für die teilnehmenden Filmemacher übernommen. Für
              Teilnehmer unter 16 Jahren können wir dieses Angebot auch auf eine
              Begleitperson ausweiten.
            </p>
          </div>
        )}
      </div>
    </>
  );
}
