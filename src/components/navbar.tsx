"use client";
import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import Kijufi from "@/images/Kijufi.png";
import Instagram from "@/images/Instagram.png";
import Facebook from "@/images/Facebook.png";
import Youtube from "@/images/Youtube.png";
import M from "@/images/M.png";
import styles from "../app/navbar.module.css";
import { reveal as Menu } from "react-burger-menu";

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    ["/", "Homepage"],
    ["/programm", "Programm"],
    ["/kontakt", "Kontakt"],
    ["/faq", "FAQ"],
    ["/impressum", "Impressum"],
  ];

  const handleMenuStateChange = (state: { isOpen: boolean }) => {
    setIsOpen(state.isOpen);
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.navbarLeft}>
        <Image src={Kijufi} alt="company logo" className={styles.kijufi} />
        <div className={styles.navbarSocials}>
          <div className={styles.socialIconContainer}>
            <Image
              height={30}
              width={30}
              src={Instagram}
              alt="Instagram logo"
              className={styles.socialIcon}
            />
          </div>
          <div className={styles.socialIconContainer}>
            <Image
              height={30}
              width={30}
              src={Facebook}
              alt="Facebook"
              className={styles.socialIcon}
            />
          </div>
          <div className={styles.socialIconContainer}>
            <Image
              height={30}
              width={30}
              src={Youtube}
              alt="Youtube"
              className={styles.socialIcon}
            />
          </div>
          <div className={styles.socialIconContainer}>
            <Image
              height={30}
              width={30}
              src={M}
              alt="M Social Media"
              className={styles.socialIcon}
            />
          </div>
        </div>
      </div>
      <div className={styles.navbarRight}>
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className={styles.burgerButton}
        >
          Menu
        </button>
        <Menu
          isOpen={isOpen}
          onStateChange={handleMenuStateChange}
          width={"60%"}
          right
        >
          <div>
            <ul className={`${styles.headerMenu}`}>
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
        </Menu>
      </div>
    </div>
  );
};

export default Navbar;
