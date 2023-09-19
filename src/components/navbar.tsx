"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react"
import Link from "next/link";
import Kijufi from "../images/Kijufi.png";
import Instagram from "../images/Instagram.png";
import Facebook from "../images/Facebook.png";
import Youtube from "../images/Youtube.png";
import M from "../images/M.png";
import styles from "../app/styles.module.css";


const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const links = [
    ["/", "Homepage"],
    ["/programm", "Programm"],
    ["/practical-info", "Pratical Info"],
    ["/kontakt", "Kontakt"],
    ["/faq", "FAQ"],
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className={styles.navbar}>
      <div className={styles.leftSection}>
        <Image src={Kijufi} alt="Kijufi Logo" className={styles.kijufiImage} />
        <div className={styles.socialMedia}>
          <Image
            src={Instagram}
            alt="Instagram logo"
            className={styles.socialIcon}
          />
          <Image src={Facebook} alt="Facebook" className={styles.socialIcon} />
          <Image src={Youtube} alt="Youtube" className={styles.socialIcon} />
          <Image src={M} alt="M Social Media" className={styles.socialIcon} />
        </div>
      </div>
      <div className={`${styles.headerContainer} ${isOpen ? "active" : ""}`}>
        <ul className={`${styles.headerMenu} ${isOpen ? "active" : ""}`}>
          {links.map(([path, text]) => {
            const isActive = pathname === path;
            console.log({ pathname, path });
            return (
              <li key={path}>
                <Link
                  href={path}
                  className={styles.headerMenuLi}
                  data-active={isActive}
                >
                  {text}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className={styles.rightSection}>
        <button type="button" className={styles.headerButton} onClick={toggleMenu}>
          Tickets
        </button>
      </div>
    </div>
  );
};

export default Navbar;
