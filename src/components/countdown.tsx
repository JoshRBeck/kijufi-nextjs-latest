"use client";
import React from "react";
import { useEffect, useState } from "react";
import styles from "../app/page.module.css";

const Countdown: React.FC = () => {
  const [countdownValue, setCountdownValue] = useState("");

  useEffect(() => {
    const targetDate = new Date("2023-12-08T10:00:00").getTime();
    const countdown = setInterval(function () {
      const currentDate = new Date().getTime();
      const timeRemaining = targetDate - currentDate;
      const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
      const formattedCountdown = `${days} Tage ${hours} Stunden ${minutes} Minuten ${seconds} Sekunden`;

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
      <div id="countdownContainer">
        <p className={styles.countdownNumbers}>{countdownValue}</p>
      </div>
    </div>
  );
};

export default Countdown;
