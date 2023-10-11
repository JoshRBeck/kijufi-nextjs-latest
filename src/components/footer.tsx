"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Instagram from "@/images/Instagram.png";
import Facebook from "@/images/Facebook.png";
import Youtube from "@/images/Youtube.png";
import M from "@/images/M.png";
import ZukunftsPaket from "@/images/zukunftspaket.png";
import byKijufi from "@/images/by-kijufi.png";
import styles from "../app/footer.module.css";

const Footer: React.FC = () => {
  const pathname = usePathname();
  const links = [
    ["/kontakt", "Kontakt"],
    ["/impressum", "Impressum"],
    ["/datenschutz", "Datenschutz"],
  ];

  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerTop}>
        <div className={styles.footerTopLeft}>
          <Image
            src={ZukunftsPaket}
            alt="Zukunfts Paket Image"
            className={styles.zukunftImage}
          />
          <Image
            src={byKijufi}
            alt="Image of by Kijufi"
            className={styles.byKijufiImage}
          />
        </div>
        <div className={styles.footerBottomRight}>
          <p className={styles.footerText}>
            Gemeinsam Grenzenlos – das Kinderrechte-Filmfestival 2023 ist ein
            Projekt des Landesverbands Kinder- und Jugendfilm Berlin e.V.
            (kijufi). Die Durchführung wird gefördert im Rahmen des Programms
            Das Zukunftspaket. Das Zukunftspaket für Bewegung, Kultur und
            Gesundheit ist ein Programm des Bundesministeriums für Familie,
            Senioren, Frauen und Jugend (BMFSFJ). Es wird umgesetzt von der
            Gesellschaft für soziale Unternehmensberatung (gsub) und der
            Stiftung SPI. Der Programmteil „Kinder- und Jugendbeteiligung im
            Zukunftspaket“ wird verantwortet von der Deutschen Kinder- und
            Jugendstiftung (DKJS).
          </p>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <div className={styles.footerBottomLinks}>
          <ul className={styles.footerLinksList}>
            {links.map(([path, text]) => {
              const isActive = pathname === path;
              console.log({ pathname, path });
              return (
                <li key={path} className={styles.footerLink}>
                  <Link
                    href={path}
                    className={styles.footerLink}
                    data-active={isActive}
                  >
                    {text}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className={styles.footerBottomSocials}>
          <div className={styles.socialIconContainer}>
            <Image
              src={Instagram}
              alt="Instagram logo"
              className={styles.socialIcon}
            />
          </div>
          <div className={styles.socialIconContainer}>
            <Image
              src={Facebook}
              alt="Facebook"
              className={styles.socialIcon}
            />
          </div>
          <div className={styles.socialIconContainer}>
            <Image src={Youtube} alt="Youtube" className={styles.socialIcon} />
          </div>
          <div className={styles.socialIconContainer}>
            <Image src={M} alt="M Social Media" className={styles.socialIcon} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
