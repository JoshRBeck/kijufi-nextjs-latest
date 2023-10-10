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
        "Ihr könnt bis zu drei eurer fertigen Filmarbeiten einreichen.",
      colorClass: "schritteColorOne",
    },
    {
      nummer: "02",
      name: "Filmlänge",
      beschreibung:
        "Eure Filme dürfen eine Länge von 10 Minuten nicht überschreiten.",
      colorClass: "schritteColorTwo",
    },
    {
      nummer: "03",
      name: "Produktionsjahr",
      beschreibung:
        "Wir nehmen Filme an, die 2022 oder 2023 fertig gestellt wurden.",
      colorClass: "schritteColorThree",
    },
    {
      nummer: "04",
      name: "Altersgrenze",
      beschreibung:
        "Kinder, Jugendliche und junge Erwachsene bis 25 Jahre können ihre Filme einreichen.",
      colorClass: "schritteColorFour",
    },
    {
      nummer: "05",
      name: "Dateiformate",
      beschreibung:
        "Ihr könnt eure Filme in jedem gängigen Dateiformat einreichen.",
      colorClass: "schritteColorFive",
    },
    {
      nummer: "06",
      name: "Kostenlose Registerierung",
      beschreibung:
        "Die Anmeldung und Einreichung eurer Filme über die Plattform filmfestivals4u.net ist kostenlos.",
      colorClass: "schritteColorSix",
    },
    {
      nummer: "07",
      name: "Rechte-Zusicherung",
      beschreibung:
        "Ihr bestätigt uns, dass ihr ohne Einschränkungen alle Bild- und Tonrechte an eurem Film besitzt.",
      colorClass: "schritteColorSeven",
    },
    {
      nummer: "08",
      name: "Festival-Teilnahme",
      beschreibung:
        "Wenn euer Film ausgewählt wird, nehmen garantiert mind. zwei Mitglieder eures Filmteams am Festival teil.",
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
            <h3>Teilnahmebedingungen</h3>
            <ol className={styles.guidelinesList}>
              <li className={styles.guidelinesListItems}>
                <span className={styles.guidelinesListHeadlines}>
                  Einreichungen:
                </span>{" "}
                Pro Regisseur*in oder Filmteam können maximal drei Filme als
                fertige Arbeit eingereicht werden. Wir freuen uns auf
                vielfältige und überraschende Einreichungen!
              </li>
              <li className={styles.guidelinesListItems}>
                <span className={styles.guidelinesListHeadlines}>
                  Filmlänge:
                </span>{" "}
                Eure Filme sollten nicht länger als 10 Minuten sein. Das gibt
                uns die Zeit, im Anschluss an das Screening eurer Filme mit euch
                ins Gespräch zu kommen.
              </li>
              <li className={styles.guidelinesListItems}>
                <span className={styles.guidelinesListHeadlines}>
                  {" "}
                  Produktionsjahr:
                </span>{" "}
                Für das Festival nehmen wir Filme an, die nach dem 1. Januar
                2022 fertiggestellt wurden. Uns ist es wichtig, dass ihr als
                Filmemacher:innen eure Filme persönlich bei dem Festival
                präsentiert. Bei aktuellen Produktionen klappt das meistens am
                besten.
              </li>
              <li className={styles.guidelinesListItems}>
                <span className={styles.guidelinesListHeadlines}>
                  Altersgrenze:
                </span>{" "}
                Wir sind ein Festival von jungen Menschen für junge Menschen.
                Wir zeigen in unserem Kurzfilmprogramm deshalb ausschließlich
                Filme von Filmemacher:innen, die nicht älter als 25 Jahre sind.
                Selbstverständlich dürfen euch Erwachsene aber bei eurer
                Produktion unterstützt habt.
              </li>
              <li className={styles.guidelinesListItems}>
                <span className={styles.guidelinesListHeadlines}>
                  Dateiformate:
                </span>{" "}
                Ihr könnt eure Filme über das Einreichportal in jedem gängigen
                Dateiformat einreichen. Falls euer Film für das Programm
                ausgewählt wird, aber die Qualität des Sichtungsvideos für die
                große Kinoleinwand nicht ausreicht, bitten wir euch ggfls., uns
                den Film in geeigneter Auflösung zur Verfügung zu stellen.
              </li>
              <li className={styles.guidelinesListItems}>
                <span className={styles.guidelinesListHeadlines}>
                  Kostenlose Anmeldung:{" "}
                </span>{" "}
                Die Registrierung und Einreichung eurer Filme ist kostenlos.
                Bitte nutze dafür die Einreichplatzform www.filmfestivals4u.net.
                Ihr könnt eure Filme dort übrigens auch noch bei anderen Kinder-
                und Jugendfilmfestivals einreichen.
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
                  Festival-Teilnahme:
                </span>{" "}
                Wenn euer Film für das Festivalprogramm ausgewählt wird,
                garantiert ihr, dass mindestens zwei Mitglieder des Filmteams am
                gesamten Festival von Fr, 8.12. bis So, 10.12. teilnehmen und
                für ein Bühnengespräch im Anschluss an die Vorführung eures
                Films zur Verfügung stehen. Anfallende Reisekosten für 2
                Personen einschließlich Unterkunft zahlt das Festival. Für
                Teilnehmende unter 16 Jahren übernehmen wir auf Wunsch auch die
                Kosten für eine Begleitperson.
              </li>
            </ol>
          </div>
        )}
      </div>
    </div>
  );
};

export default Submission;
