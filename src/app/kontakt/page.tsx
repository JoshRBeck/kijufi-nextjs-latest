import KontaktForm from "@/components/kontakt";
import styles from "../page.module.css";
import Image from "next/image";
import filmTheater from "@/images/filmtheater.png";
import jugendkulturzentrum from "@/images/jugendkulturzentrum.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import Instagram from "@/images/Instagram.png";
import Facebook from "@/images/Facebook.png";
import Youtube from "@/images/Youtube.png";
import M from "@/images/M.png";
import downArrow from "@/images/downArrow.png";
import Map from "@/components/map";

export default function Kontakt() {
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
          <div className={styles.boxImage}>
            <Image
              src={jugendkulturzentrum}
              alt="youth culture center"
              className={styles.boxImageContent}
            />
          </div>
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
      </div>
      {/* <KontaktForm /> */}
      <div className={styles.postedDownloadContainer}>
        <h1>Holen Sie sich das Festivalposter hier</h1>
        <div className={styles.boxContent}>Temporary Box</div>
        <p>Click here to get the poster as PDF</p>
        <Image
          src={downArrow}
          alt="an arrow pointing down"
          className={styles.downArrow}
        ></Image>
        <div>
          <button type="button" className={styles.downloadButton}>
            Download
          </button>
        </div>
        <p>In sozialen Netzwerken Teilen</p>
        <div className={styles.socialIconContainer}>
          <Image
            src={Instagram}
            alt="Instagram logo"
            className={styles.socialIcon}
          />
        </div>
        <div className={styles.socialIconContainer}>
          <Image src={Facebook} alt="Facebook" className={styles.socialIcon} />
        </div>
        <div className={styles.socialIconContainer}>
          <Image src={Youtube} alt="Youtube" className={styles.socialIcon} />
        </div>
        <div className={styles.socialIconContainer}>
          <Image src={M} alt="M Social Media" className={styles.socialIcon} />
        </div>
      </div>
    </div>
  );
}
