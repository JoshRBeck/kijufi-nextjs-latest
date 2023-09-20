"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import Kijufi from "../images/Kijufi.png";
import Instagram from "../images/Instagram.png";
import Facebook from "../images/Facebook.png";
import Youtube from "../images/Youtube.png";
import M from "../images/M.png";
import styles from "../app/page.module.css";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const isMobile = window.innerWidth <= 1025;
  const pathname = usePathname();
  const links = [
    ["/", "Homepage"],
    ["/programm", "Programm"],
    ["/practical-info", "Pratical Info"],
    ["/kontakt", "Kontakt"],
    ["/faq", "FAQ"],
  ];

  const toggleMenu = () => {
    console.log("Toggle Menu CLicked");
    setIsOpen(!isOpen);
  };

  console.log("isOpen:", isOpen);
  console.log("styles.headerMenu:", styles.headerMenu);
  // const checkIsMobile = () => {
  //   setIsMobile(window.innerWidth <= 1024);
  // };

  // useEffect(() => {
  //   checkIsMobile();
  //   window.addEventListener("resize", checkIsMobile);
  //   return () => {
  //     window.removeEventListener("resize", checkIsMobile);
  //   };
  // }, []);

  return (
    <nav>
      <div className={`${styles.navbar} ${isOpen ? "open" : ""}`}>
        <div className={styles.burgerButton}>
          <button type="button" onClick={toggleMenu} id="al" aria-label="Name">
            <div className={styles.burgerLine}></div>
            <div className={styles.burgerLine}></div>
            <div className={styles.burgerLine}></div>
          </button>
          <ul
            className={`${styles.headerMenu}  ${
              isOpen ? "active" : ""
            }`}
          >
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
      </div>
    </nav>
  );
};

export default Navbar;

// <div className={`${styles.navbar} ${isMobile ? "hamburgerMenu" : ""}`}>
//   <div className={styles.leftSection}>
//     <Image src={Kijufi} alt="Kijufi Logo" className={styles.kijufiImage} />
//     <div className={styles.socialMedia}>
//       <Image
//         src={Instagram}
//         alt="Instagram logo"
//         className={styles.socialIcon}
//       />
//       <Image src={Facebook} alt="Facebook" className={styles.socialIcon} />
//       <Image src={Youtube} alt="Youtube" className={styles.socialIcon} />
//       <Image src={M} alt="M Social Media" className={styles.socialIcon} />
//     </div>
//   </div>
//   <div className={`${styles.headerContainer} ${isOpen ? styles.active : ""}`}>
//     {isMobile ? (
//       <div className={styles.burgerButton}>
//       <button type="button" onClick={toggleMenu} id="al" aria-label="Name">
//         <div className={styles.burgerLine}></div>
//         <div className={styles.burgerLine}></div>
//         <div className={styles.burgerLine}></div>
//       </button>
//     </div>
//     ) : (
//     )}
//   </div>
//   <div className={styles.rightSection}>
//     {isOpen && !isMobile (
//       <div className={styles.ticketButton}>
//         <button
//           type="button"
//           className={styles.ticketButton}
//           onClick={toggleMenu}
//         >
//           Tickets
//         </button>
//       </div>
//     )}
//   </div>
// </div>
