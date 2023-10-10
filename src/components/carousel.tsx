"use client";
import React from "react";
import Image from "next/image";
import Yorck from "@/images/Yorck-Kinogruppe.png";
import MPower from "@/images/MPower-e.V..png";
import Songs from "@/images/Songs-for-Rights.png";
import IYCE from "@/images/IYCE.png";
import StadtBibliothek from "@/images/Stadtbibliothek-Berlin-Mitte.png";
import styles from "../app/carousel.module.css";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  { src: Yorck, width: 300, height: 300 },
  { src: MPower, width: 300, height: 300 },
  { src: Songs, width: 300, height: 300 },
  { src: IYCE, width: 300, height: 300 },
  { src: StadtBibliothek, width: 300, height: 300 },
];

const CarouselComponent: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState("left");

  const handleNext = () => {
    setDirection("right");
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === images.length ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setDirection("left");

    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleDotClick = (index: number) => {
    setDirection(index > currentIndex ? "right" : "left");
    setCurrentIndex(index);
  };

  const slideVariants = {
    hiddenRight: {
      x: "-100%",
      opacity: 0,
    },
    hiddenLeft: {
      x: "100%",
      opacity: 0,
    },
    visible: {
      x: "0",
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.5,
      },
    },
    hover: {
      scale: 1.2,
    },
  };
  const dotsVariants = {
    initial: {
      y: 0,
    },
    animate: {
      y: -10,
      scale: 1.3,
      transition: { type: "spring", stiffness: 1000, damping: "10" },
    },
    hover: {
      scale: 1.1,
      transition: { duration: 0.2 },
    },
  };

  useEffect(() => {
    const timer = setInterval(handleNext, 3000); // 10 seconds
    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <div>
      <div className={styles.carousel}>
        <AnimatePresence>
          <motion.div
            key={currentIndex}
            variants={slideVariants}
            initial={direction === "right" ? "hiddenRight" : "hiddenLeft"}
            animate="visible"
            exit="exit"
          >
            <Image
              key={currentIndex}
              src={images[currentIndex].src}
              alt="current image"
              width={images[currentIndex].width}
              height={images[currentIndex].height}
            />{" "}
          </motion.div>
        </AnimatePresence>
        <div className={styles.slideDirection}>
          <motion.div
            className={styles.leftDirection}
            variants={slideVariants}
            whileHover="hover"
            onClick={handlePrevious}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20"
              viewBox="0 96 960 960"
              width="20"
            >
              <path d="M400 976 0 576l400-400 56 57-343 343 343 343-56 57Z" />
            </svg>
          </motion.div>
          <motion.div
            className={styles.rightDirection}
            variants={slideVariants}
            whileHover="hover"
            onClick={handleNext}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20"
              viewBox="0 96 960 960"
              width="20"
            >
              <path d="m304 974-56-57 343-343-343-343 56-57 400 400-400 400Z" />
            </svg>
          </motion.div>
        </div>
        <div className={styles.indicator}>
          {images.map((_, index) => (
            <motion.div
              key={index}
              className={`dot ${currentIndex === index ? "active" : ""}`}
              onClick={() => handleDotClick(index)}
              initial="initial"
              animate={currentIndex === index ? "animate" : ""}
              whileHover="hover"
              variants={dotsVariants}
            ></motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarouselComponent;
