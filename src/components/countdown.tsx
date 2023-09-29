"use client";
import React, { useEffect, useState } from "react";
import styles from "../app/page.module.css";

const Countdown: React.FC = () => {
  const [countdownValue, setCountdownValue] = useState("");
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const targetDate = new Date("2023-12-08T10:00:00").getTime();
    const countdown = setInterval(function () {
      const currentDate = new Date().getTime();
      const timeRemaining = targetDate - currentDate;
      const calculatedDays = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
      const calculatedHours = Math.floor(
        (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const calculatedMinutes = Math.floor(
        (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
      );
      const calculatedSeconds = Math.floor(
        (timeRemaining % (1000 * 60)) / 1000
      );
      const formattedCountdown = `${calculatedDays} Tage ${calculatedHours} Stunden ${calculatedMinutes} Minuten ${calculatedSeconds} Sekunden`;

      setDays(calculatedDays);
      setHours(calculatedHours);
      setMinutes(calculatedMinutes);
      setSeconds(calculatedSeconds);
      setCountdownValue(formattedCountdown);

      if (timeRemaining <= 0) {
        clearInterval(countdown);
        setCountdownValue("Das Festival hat begonnen");
      }
    }, 1000);
    return () => {
      clearInterval(countdown);
    };
  }, []);

  return (
    <div className={styles.countdownContainer}>
      <div id="countdownContainer" className={styles.countdownWrapper}>
        <div className={styles.countdownItem}>
          <p className={styles.countdownNumber}>{days}:</p>
          <p className={styles.countdownText}>Tage</p>
        </div>
        <div className={styles.countdownItem}>
          <p className={styles.countdownNumber}>{hours}:</p>
          <p className={styles.countdownText}>Stu</p>
        </div>
        <div className={styles.countdownItem}>
          <p className={styles.countdownNumber}>{minutes}:</p>
          <p className={styles.countdownText}>Min</p>
        </div>
        <div className={styles.countdownItem}>
          <p className={styles.countdownNumber}>{seconds}</p>
          <p className={styles.countdownText}>Sek</p>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
