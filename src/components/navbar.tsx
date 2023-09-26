"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import Kijufi from "@/images/Kijufi.png";
import Instagram from "@/images/Instagram.png";
import Facebook from "@/images/Facebook.png";
import Youtube from "@/images/Youtube.png";
import M from "@/images/M.png";
import styles from "../app/page.module.css";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();
  const links = [
    ["/", "Homepage"],
    ["/programm", "Programm"],
    ["/practical-info", "Pratical Info"],
    ["/kontakt", "Kontakt"],
    ["/faq", "FAQ"],
    ["/impressum", "Impressum"],
  ];

  const toggleMenu = () => {
    console.log("Toggle Menu CLicked");
    setIsOpen(!isOpen);
  };

  console.log("isOpen:", isOpen);
  console.log("styles.headerMenu:", styles.headerMenu);
  const checkIsMobile = () => {
    setIsMobile(window.innerWidth <= 1024);
  };

  useEffect(() => {
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  return (
    <nav>
      <div className={`${styles.navbar} ${isOpen ? "open" : ""}`}>
        {isMobile &&
        <div className={styles.burgerButton}>
          <button type="button" onClick={toggleMenu} id="al" aria-label="Name">
            <div className={styles.burgerLine}></div>
            <div className={styles.burgerLine}></div>
            <div className={styles.burgerLine}></div>
          </button>
          <ul className={`${styles.headerMenu}  ${isOpen ? "active" : ""}`}>
            {links.map(([path, text]) => {
              const isActive = pathname === path;
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
        }
      </div>
    </nav>
  );
};

export default Navbar;
