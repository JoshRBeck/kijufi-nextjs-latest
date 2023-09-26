"use client";
import Image from "next/image";
import Chair from "@/images/chair.png";
import styles from "../app/page.module.css";

const Schedule: React.FC = () => {
  const schedule = [
    {
      day: "FR. 8.12",
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
      day: "SA. 9.12",
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
      day: "SO. 10.12",
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
        <div key={dayIndex} className={styles.programmDayDesktop}>
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
              {dayInfo.events
                .filter((event) => {
                  return (
                    event.Startzeit !== "" ||
                    event.Filmvorführungen !== "" ||
                    event.Festival !== "" ||
                    event.Standort !== ""
                  );
                })
                .map((event, eventIndex) => (
                  <li key={eventIndex} className={styles.programmEvent}>
                    {event.Startzeit && <div>{event.Startzeit}</div>}
                    {event.Filmvorführungen && (
                      <div>{event.Filmvorführungen}</div>
                    )}
                    {event.Festival && <div>{event.Festival}</div>}
                    {event.Standort && <div>{event.Standort}</div>}
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
