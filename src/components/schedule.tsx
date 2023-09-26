"use client";
import Image from "next/image";
import Chair from "@/images/chair.png";
import styles from "../app/page.module.css";

const Schedule: React.FC = () => {
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
    <div className={styles.programmScheduleDesktop}>
      {schedule.map((dayInfo, dayIndex) => (
        <div
          key={dayIndex}
          className={`${styles.programmDayDesktop} ${
            dayIndex % 2 === 0 ? styles.evenDay : styles.oddDay
          }`}
        >
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
          <div className={styles.programmDaySchedule}>
            <h2 className={styles.programmDayHeading}>{dayInfo.day}</h2>
            <ul>
              {dayInfo.events.map((event, eventIndex) => (
                <li key={eventIndex} className={styles.programmEvent}>
                  <div>
                    <p>Start Time:</p> {event.Startzeit}
                  </div>
                  <div>
                    <p>Film Screenings:</p> {event.Filmvorführungen}
                  </div>
                  <div>
                    <p>Festival:</p> {event.Festival}
                  </div>
                  <div>
                    <p>Standort:</p> {event.Standort}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Schedule;
