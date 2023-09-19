import Link from "next/link";
import Image from "next/image";
import Instagram from "../images/Instagram.png"
import Facebook from "../images/Facebook.png"
import Youtube from "../images/Youtube.png"
import M from "../images/M.png"
import ZukunftsPaket from "../images/zukunftspaket.png"
import byKijufi from "../images/by-kijufi.png"
import styles from "../app/styles.module.css"

const Footer: React.FC = () => {
  return (
    <div>
      <div className={styles.footerTop}>
        <div className={styles.footerTopLeft}>
          <Image src={ZukunftsPaket} alt="Zukunfts Paket Image" className={styles.zukunftImage} />
          <Image src={byKijufi} alt="Image of by Kijufi" className={styles.byKijufiImage} />
        </div>
        <div className={styles.footerBottomRight}>
          <p className={styles.footerText}>Gemeinsam Grenzenlos - das Kinderrechte-Filmfestival 2023 is a project of 
          the Landesverband Kinder- und Jugendfilm Berlin e.V. (Kijufi). The implementation is funded within the 
          framework of the programme Das Zukunftspaket. Future Package. The Future Package for Movement, Culture 
          and Health is a programme of the Federal Ministry for Family Affairs, Senior Citizens, Women and Youth
           (BMFSFJ). It is implemented by the Gesellschaft für soziale Unternehmensberatung (gsub) and the SPI 
           Foundation. The programme part &ldquo;Child and Youth Participation in the Future Package&rdquot; is the 
           responsibility of the German Children and Youth Foundation (DKJS).</p>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <div className={styles.footerBottomLinks}>
          <ul className={styles.footerLinksList}>
            <li >
              <Link href="/contact" className={styles.footerLink}>Kontakt</Link>
            </li>
            <li >
              <Link href="/impressum" className={styles.footerLink}>Impressum</Link>
            </li>
            <li >
              <Link href="/dataprotection" className={styles.footerLink}>Datenschutz</Link>
            </li>
          </ul>
        </div>
        <div className={styles.footerBottomSocials}>
            <Image src={Instagram} alt="Instagram logo" className={styles.socialIcon}/>
            <Image src={Facebook} alt="Facebook" className={styles.socialIcon}/>
            <Image src={Youtube} alt="Youtube" className={styles.socialIcon}/>
            <Image src={M} alt="M Social Media" className={styles.socialIcon}/>
        </div>
      </div>
    </div>
  );
};

export default Footer;