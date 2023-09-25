"use client";
import { useEffect, useState } from "react";
import styles from "../page.module.css";
import Image from "next/image";
import filmTheater from "@/images/filmtheateramfriedrichshain.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import Instagram from "@/images/Instagram.png";
import Facebook from "@/images/Facebook.png";
import Youtube from "@/images/Youtube.png";
import M from "@/images/M.png";
declare const google: any;

export default function Kontakt() {
  const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  const Map = () => {
    useEffect(() => {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=${googleMapsApiKey}&libraries=places`;
      script.async = true;
      document.head.appendChild(script);
      script.onload = () => {
        const map = new google.maps.Map(document.getElementById("map"), {
          center: { lat: 52.52933254861146, lng: 13.430516771164287 },
          zoom: 8,
        });
        // Add markers, polygons, or other map features
      };
      return () => {
        document.head.removeChild(script);
      };
    }, []);

    return <div id="map" className={styles.map} />;
  };
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    betreff: "",
    nachricht: "",
  });
  const handleInputChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const response = await fetch("/api/send-email", {
      method: "POST",
      body: JSON.stringify(formData),
    });
    if (response.ok) {
      console.log("Email Sent Successfully!");
    } else {
      console.log("Email sending failed");
    }
  };

  return (
    <div>
      <div className={styles.kontaktContainer}>
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
      {/* Container for Socials */}
      <div className={styles.containerSocialsAndForm}>
        <div className={styles.socialsContainer}>
          <h1 className={styles.kontaktSocialsKijufi}>Kijufi</h1>
          Landesverband Kinder- und Jugendfilm Berlin e.V. (kijufi)
          <br />
          Am Sudhaus 21
          <br />
          2053 Berlin
          <br />
          Telefon: +49 (0)157 35 70 58 73
          <br />
          E-Mail: info@kijufi.de
          <div className={styles.footerBottomSocials}>
            <Image
              src={Instagram}
              alt="Instagram logo"
              className={styles.socialIcon}
            />
            <Image
              src={Facebook}
              alt="Facebook"
              className={styles.socialIcon}
            />
            <Image src={Youtube} alt="Youtube" className={styles.socialIcon} />
            <Image src={M} alt="M Social Media" className={styles.socialIcon} />
          </div>
        </div>
        {/* Container for Kontakt form */}
        <div>
          <form onSubmit={handleSubmit} className={styles.formContainer}>
            <h2 className={styles.formTitle}>
              Wir freuen uns von dir zu hören!
            </h2>
            <div className={styles.formField}>
              <label htmlFor="name"></label>
              <input
                placeholder="Dein Name"
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className={styles.inputField}
              />
            </div>
            <div className={styles.formField}>
              <label htmlFor="email"></label>
              <input
                placeholder="Deine Email Addresse"
                type="text"
                id="email"
                value={formData.email}
                onChange={handleInputChange}
                className={styles.inputField}
              />
            </div>
            <div className={styles.formField}>
              <label htmlFor="betreff"></label>
              <textarea
                placeholder="Betreff"
                id="betreff"
                name="betreff"
                value={formData.betreff}
                onChange={handleInputChange}
                className={styles.textAreaField}
              />
            </div>
            <div className={styles.formField}>
              <label htmlFor="nachricht"></label>
              <textarea
                placeholder="Nachricht"
                id="nachricht"
                name="nachricht"
                value={formData.nachricht}
                onChange={handleInputChange}
                className={styles.textAreaField}
              />
            </div>
            <button type="submit" className={styles.submitButton}>
              Senden
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
