import Link from "next/link";
import Image from "next/image";
import Instagram from "../images/Instagram.png"
import Facebook from "../images/Facebook.png"
import Youtube from "../images/Youtube.png"
import M from "../images/M.png"
import ZukunftsPaket from "../images/zukunftspaket.png"
import byKijufi from "../images/by-kijufi.png"

const Footer: React.FC = () => {
  return (
    <div>
      <div className="footer-top">
        <div className="footer-top-left">
          <Image src={ZukunftsPaket} alt="Zukunfts Paket Image" className="zukunft-image" />
          <Image src={byKijufi} alt="Image of by Kijufi" className="by-kijufi-image" />
        </div>
        <div className="footer-top-right">
          <p className="footer-text">Gemeinsam Grenzenlos - das Kinderrechte-Filmfestival 2023 is a project of 
          the Landesverband Kinder- und Jugendfilm Berlin e.V. (Kijufi). The implementation is funded within the 
          framework of the programme Das Zukunftspaket. Future Package. The Future Package for Movement, Culture 
          and Health is a programme of the Federal Ministry for Family Affairs, Senior Citizens, Women and Youth
           (BMFSFJ). It is implemented by the Gesellschaft für soziale Unternehmensberatung (gsub) and the SPI 
           Foundation. The programme part &ldquo;Child and Youth Participation in the Future Package&rdquot; is the 
           responsibility of the German Children and Youth Foundation (DKJS).</p>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-bottom-links">
          <ul className="footer-links-list">
            <li >
              <Link href="/contact" className="footer-link">Kontakt</Link>
            </li>
            <li >
              <Link href="/impressum" className="footer-link">Impressum</Link>
            </li>
            <li >
              <Link href="/dataprotection" className="footer-link">Datenschutz</Link>
            </li>
          </ul>
        </div>
        <div className="footer-bottom-socials">
            <Image src={Instagram} alt="Instagram logo" className="social-icon" />
            <Image src={Facebook} alt="Facebook" className="social-icon" />
            <Image src={Youtube} alt="Youtube" className="social-icon" />
            <Image src={M} alt="M Social Media" className="social-icon" />
        </div>
      </div>
    </div>
  );
};

export default Footer;