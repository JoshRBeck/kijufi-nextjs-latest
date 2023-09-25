import styles from "../page.module.css";
import Image from "next/image";
import Chair from "@/images/chair.png";
import Flyer from "@/images/Flyer.png";

export default function Programm() {
  const schedule = [
    {
      day: "Freitag",
      poster: {
        imageSrc: Chair,
        buttonText: "Programmdetails",
      },
      events: [
        {
          Startzeit: "🕘 10.00",
          Filmvorführungen: "🎬 Kurzfilm-Programm für Schulklasse",
          Festival: "",
          Standort: "📍Filmtheater am Friedrichshain, Saal 1",
        },
        {
          Startzeit: "🕘 16.00",
          Filmvorführungen: "🎬Festivaleröffnung",
          Festival: "",
          Standort: "📍Filmtheater am Friedrichshain, Saal 1",
        },
        {
          Startzeit: "🕘 19.00",
          Filmvorführungen: "",
          Festival: "🥳 Festival-Party",
          Standort: "📍Jugendkulturzentrum Königstadt",
        },
      ],
    },
    {
      day: "Samstag",
      poster: {
        imageSrc: Chair,
        buttonText: "Programmdetails",
      },
      events: [
        {
          Startzeit: "🕘 11.00",
          Filmvorführungen: "🎬 Kurzfilmprogramm 1",
          Standort: "📍 Filmtheater am Friedrichshain, Saal 1",
        },
        {
          Startzeit: "🕘 13.00",
          Filmvorführungen: "",
          Festival: "🥳 Filmmakers Lunch / Meet & Greet",
          Standort: "📍Jugendkulturzentrum Königstadt",
        },
        {
          Startzeit: "🕘 15.30",
          Filmvorführungen: "🎬 Kurzfilmprogramm 1",
          Festival: "",
          Standort: "📍Filmtheater am Friedrichshain, Saal 1",
        },
        {
          Startzeit: "🕘 17.30",
          Filmvorführungen: "",
          Festival: "🥳Talk + Filmmakers Dinner",
          Standort: "📍Jugendkulturzentrum Königstadt",
        },
        {
          Startzeit: "🕘 20.00",
          Filmvorführungen: " 🎬 Kinderrechte-Überraschungsfilm 1",
          Festival: "",
          Standort: "📍Jugendkulturzentrum Königstadt",
        },
      ],
    },
    {
      day: "Sonntag",
      poster: {
        imageSrc: Chair,
        buttonText: "Programmdetails",
      },
      events: [
        {
          Startzeit: "🕘 11.00",
          Filmvorführungen:
            "🎬 Publikumsfavoriten + Kinderrechte-Überraschungsfilm 2",
          Festival: "",
          Standort: "📍Filmtheater am Friedrichshain, Saal 2",
        },
      ],
    },
  ];

  return (
    <div>
      <div className={styles.programmHeadingContainer}>
        <h1 className={styles.programmHeading}>
          Unser Programm für Filmemacher
        </h1>
        <p className={styles.programmHeadingText}>
          🕘 : Startzeit 🎬 : Filmvorführungen 🥳 : Festival 📍 : Standort
        </p>
      </div>
      <div className={styles.programmSchedule}>
        {schedule.map((dayInfo, dayIndex) => (
          <div key={dayIndex} className={styles.programmDay}>
            <h2 className={styles.programmDayHeading}>{dayInfo.day}</h2>
            <ul>
              {dayInfo.events.map((event, eventIndex) => (
                <li key={eventIndex} className={styles.programmEvent}>
                  <div>
                    <strong>Start Time:</strong> {event.Startzeit}
                  </div>
                  <div>
                    <strong>Film Screenings:</strong> {event.Filmvorführungen}
                  </div>
                  <div>
                    <strong>Festival:</strong> {event.Festival}
                  </div>
                  <div>
                    <strong>Standort:</strong> {event.Standort}
                  </div>
                </li>
              ))}
            </ul>{" "}
            <div className={styles.programmPoster}>
              <Image
                src={dayInfo.poster.imageSrc}
                alt={`Poster for ${dayInfo.day}`}
                className={styles.programmPosterImage}
              />
              <button type="button" className={styles.programmButton}>
                {dayInfo.poster.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.essenKarte}>
        <h1 className={styles.essenKarteHeading}>ESSEN & GETRÄNKE</h1>
      </div>
      <div className={styles.flyerContainer}>
        <h1 className={styles.flyerHeader}>
          Das Programm für die Organisation des Festivals
        </h1>
        <Image src={Flyer} alt="Flyer" className={styles.flyerImage}></Image>
      </div>
    </div>
  );
}
