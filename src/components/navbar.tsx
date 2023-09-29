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
import styles from "../app/page.module.css";
import { reveal as Menu } from "react-burger-menu";

const Navbar: React.FC = () => {
  console.log("Navbar component rendered");
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  console.log("isOpen state:", isOpen);
  console.log("pathname:", pathname);
  const links = [
    ["/", "Homepage"],
    ["/programm", "Programm"],
    ["/practical-info", "Pratical Info"],
    ["/kontakt", "Kontakt"],
    ["/faq", "FAQ"],
    ["/impressum", "Impressum"],
  ];

  const handleMenuStateChange = (state: { isOpen: boolean }) => {
    setIsOpen(state.isOpen);
    console.log("Menu state:", state.isOpen);
  };

  return (
    <div className={styles.navbar}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={styles.burgerButton}
      >
        Toggle Menu
      </button>
      <Menu
        isOpen={isOpen}
        onStateChange={handleMenuStateChange}
        width={250}
        right
      >
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
      </Menu>
    </div>
  );
};

export default Navbar;
