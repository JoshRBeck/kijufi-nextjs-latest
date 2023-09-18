"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Kijufi from "../images/Kijufi.png";
import Instagram from "../images/Instagram.png";
import Facebook from "../images/Facebook.png";
import Youtube from "../images/Youtube.png";
import M from "../images/M.png";

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const links = [
    ["/", "Homepage"],
    ["/programm", "Programm"],
  ];
  return (
    <div className="navbar">
      <div className="left-section">
        <Image src={Kijufi} alt="Kijufi Logo" className="kijufi-image" />
        <div className="social-media">
          <Image src={Instagram} alt="Instagram logo" className="social-icon" />
          <Image src={Facebook} alt="Facebook" className="social-icon" />
          <Image src={Youtube} alt="Youtube" className="social-icon" />
          <Image src={M} alt="M Social Media" className="social-icon" />
        </div>
      </div>
      <div className="header-container">
        <ul className="header-menu">
          {links.map(([path, text]) => {
            const isActive = pathname === path;
            console.log({ pathname, path });
            return (
              <li key={path}>
                <Link
                  href={path}
                  className="header-menu-li"
                  data-active={isActive}
                >
                  {text}
                </Link>
              </li>
            );
          })}

          <li>
            <Link href="/" className="header-menu-li">
              Home
            </Link>
          </li>
          <li>
            <Link href="/programm" className="header-menu-li">
              Programme
            </Link>
          </li>
          <li>
            <Link href="/practical-info" className="header-menu-li">
              Practical Info
            </Link>
          </li>
          <li>
            <Link href="/contact-press" className="header-menu-li">
              Contact & Press
            </Link>
          </li>
          <li>
            <Link href="/faq" className="header-menu-li">
              FAQ
            </Link>
          </li>
        </ul>
      </div>
      <div className="right-section">
        <button type="button" className="header-button">
          Tickets
        </button>
      </div>
    </div>
  );
};

export default Navbar;
