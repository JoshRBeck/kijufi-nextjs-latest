"use client";
import React from "react";
import { useState } from "react";
import styles from "../app/filmeinreichung.module.css";

const Submission: React.FC = () => {
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
  const [showDetails, setShowDetails] = useState(false);
  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };
  return (
    <div>
      <div className={styles.schritteContainer}>
        <div className={styles.schritteWrapper}>
          {schritte.map((step, index) => (
            <div
              className={`${styles.schritte} ${styles[step.colorClass]}`}
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
      <div className={styles.mehrInfoButtonContainer}>
        <hr className={styles.horizontalRule}></hr>
        <button
          type="button"
          onClick={toggleDetails}
          className={styles.mehrInfoButton}
        >
          {showDetails
            ? "Weniger Einzelheiten zu den Bedingungen für die Einreichung"
            : "Weitere Details über die Bedingungen für die Einreichung"}
        </button>
        {showDetails && (
          <div className={styles.guidelinesListContainer}>
            <ol className={styles.guidelinesList}>
              <li className={styles.guidelinesListItems}>
                <span className={styles.guidelinesListHeadlines}>
                  Mehrere Einreichungen:
                </span>{" "}
                Als junger Regisseur oder Teil eines Teams können Sie bis zu
                drei Ihrer fertigen Filmarbeiten einreichen. So können Sie Ihre
                Vielseitigkeit unter Beweis stellen und Ihr Talent in
                verschiedenen Genres und Formaten zeigen.
              </li>
              <li className={styles.guidelinesListItems}>
                <span className={styles.guidelinesListHeadlines}>
                  Filmlänge:
                </span>{" "}
                Ihre Filme dürfen nicht länger als 10 Minuten sein. Wir glauben
                an die Kraft von kurzen Geschichten und möchten jedem eine faire
                Chance geben, vorgestellt zu werden.
              </li>
              <li className={styles.guidelinesListItems}>
                <span className={styles.guidelinesListHeadlines}>
                  {" "}
                  Datum der Fertigstellung der Produktion:
                </span>{" "}
                Für das kommende Festival nehmen wir Filme an, die nach dem 1.
                Januar 2022 fertiggestellt wurden. Damit stellen wir sicher,
                dass wir frische und zeitgemäße Inhalte von unseren jungen
                Filmemachern präsentieren können.
              </li>
              <li className={styles.guidelinesListItems}>
                <span className={styles.guidelinesListHeadlines}>
                  Altersvoraussetzung:
                </span>{" "}
                Um für die Einreichung in Frage zu kommen, dürfen die Regisseure
                zum Zeitpunkt der Fertigstellung des Films nicht älter als 25
                Jahre sein. Wir ermutigen unsere jungen Filmemacher, sich zu
                beteiligen und der Welt des Films ihren Stempel aufzudrücken.
              </li>
              <li className={styles.guidelinesListItems}>
                <span className={styles.guidelinesListHeadlines}>
                  Dateiformate:
                </span>{" "}
                Sie können Ihre Filme in jedem gängigen Dateiformat einreichen.
                Unser Einreichungsportal ermöglicht ein einfaches Hochladen von
                Dateien und gewährleistet so einen problemlosen Ablauf für alle
                Teilnehmer.
              </li>
              <li className={styles.guidelinesListItems}>
                <span className={styles.guidelinesListHeadlines}>
                  Kostenlose Anmeldung:{" "}
                </span>{" "}
                Wir glauben an die Förderung einer kreativen Gemeinschaft ohne
                Barrieren, deshalb ist die Einreichung von Filmen völlig
                kostenlos. Füllen Sie einfach die Registrierung auf unserem
                benutzerfreundlichen filmfestivals4u-Anmeldeportal aus.
              </li>
              <li className={styles.guidelinesListItems}>
                <span className={styles.guidelinesListHeadlines}>
                  {" "}
                  Rechte-Zusicherung:
                </span>{" "}
                Mit der Einreichung Ihres Films versichern Sie uns, dass Sie
                alle Bild- und Tonrechte an Ihrem Werk uneingeschränkt besitzen.
                Damit ist sichergestellt, dass Ihre kreative Stimme während des
                gesamten Prozesses geschützt ist.
              </li>
              <li className={styles.guidelinesListItems}>
                <span className={styles.guidelinesListHeadlines}>
                  Festival-Vorführung:
                </span>{" "}
                Wenn Ihr Film für unser Festivalprogramm ausgewählt wird, müssen
                mindestens zwei Filmemacher aus Ihrem Team bei der Vorführung
                anwesend sein. Aber keine Sorge, wir haben für Sie vorgesorgt!
                Die Reisekosten, einschließlich der Unterkunft, werden für die
                teilnehmenden Filmemacher übernommen. Für Teilnehmer unter 16
                Jahren können wir dieses Angebot auch auf eine Begleitperson
                ausweiten.
              </li>
            </ol>
          </div>
        )}
      </div>
    </div>
  );
};

export default Submission;
