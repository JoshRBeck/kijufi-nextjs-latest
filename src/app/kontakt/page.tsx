"use client";
import { useEffect } from "react";
import styles from "../page.module.css";
import Image from "next/image";
import filmTheater from "@/images/filmtheateramfriedrichshain.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
declare const google: any;

export default function Kontakt() {
  const Map = () => {
    useEffect(() => {
      // Define the google object
      // Load the Google Maps JavaScript API using your API key
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAGfK3aXQyHUJJuRZHFiUslO8vQjI6NcxY&libraries=places`;
      script.async = true;
      document.head.appendChild(script);

      script.onload = () => {
        // Initialize and customize your Google Map here
        const map = new google.maps.Map(document.getElementById("map"), {
          center: { lat: 52.52933254861146, lng: 13.430516771164287 },
          zoom: 8,
        });
        // Add markers, polygons, or other map features
      };

      return () => {
        // Clean up
        document.head.removeChild(script);
      };
    }, []);

    return <div id="map" className={styles.map} />;
  };

  return (
    <div>
      {/* Box for Filmvorführungen */}
      <div className={styles.box}>
        <h1 className={styles.boxTitle}>Für die Filmvorführungen!</h1>
        <div className={styles.boxImage}>
          <Image
            src={filmTheater}
            alt="film theater"
            className={styles.boxImageContent}
          />
        </div>
        <div className={styles.boxText}>
          <h3>Filmtheater am Friedrichshain</h3>
          <p>
            Bötzowstraße 1-5, 10407 Berlin
            <FontAwesomeIcon
              icon={faLocationDot}
              style={{ color: "#C20000" }}
              className={styles.mapIconSmall}
            />
          </p>
        </div>
      </div>

      {/* Box for Festival */}
      <div className={styles.box}>
        <h1 className={styles.boxTitle}>Für das Festival!</h1>
        <div className={styles.boxContent}>Temporary Box</div>
      </div>
      <div className={styles.boxText}>
        <h3>Jugendkulturzentrum Königstadt</h3>
        <p>
          Saarbrücker Str. 24, 10405 Berlin
          <FontAwesomeIcon
            icon={faLocationDot}
            style={{ color: "#2f0fd2" }}
            className={styles.mapIconSmall}
          />
        </p>
      </div>
      <div className={styles.mapContainer}>
       {/* Map box */}
      <Map />
      </div>       
    </div>
  );
}
