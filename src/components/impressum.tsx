import React from "react";
import styles from "../app/impressum.module.css";

const Impressum: React.FC = () => {
  const impressumData = [
    "Landesverband Kinder- & Jugendfilm Berlin e. V.",
    "Am Sudhaus 2",
    "12053 Berlin",
    "Vereinsregister Amtsgericht Charlottenburg | Registernummer VR 9413 Nz",
    "VAT-ID/Umsatzsteuer-Identifikationsnummer: DE361265479",
  ];
  const boardMembers = ["Max Neu", "Ralf Schlotter", "Claudia Ziegenfuß"];
  const contactMethods = [
    "Postalisch unter der oben genannten Adresse",
    "Per Mail an info@kijufi.de",
    "Telefonisch unter +49 (0) 30 609 51 369",
  ];
  return (
    <div className={styles.impressumContainer}>
      <h1>Impressum</h1>
      {impressumData.map((item, index) => (
        <p key={index} className={styles.impressumParagraph}>
          {item}
        </p>
      ))}
      <p className={styles.impressumParagraph}>
        Vertretungsberechtigte Vorstandsmitglieder und verantwortliche
        Redakteure:
      </p>
      <ul className={styles.impressumList}>
        {boardMembers.map((member, index) => (
          <li key={index} className={styles.impressumListItem}>
            {member}
          </li>
        ))}
      </ul>
      <p className={styles.impressumParagraph}>
        Ihr erreicht den Landesverband Kinder- & Jugendfilm Berlin e. V.:
      </p>
      <ul className={styles.impressumList}>
        {contactMethods.map((method, index) => (
          <li key={index} className={styles.impressumListItem}>
            {index === 1 ? (
              <a href="mailto:info@kijufi.de" className={styles.impressumLink}>
                {method}
              </a>
            ) : (
              method
            )}
          </li>
        ))}
      </ul>
      <p className={styles.impressumParagraph}>
        Landesverband Kinder- und Jugendfilm Berlin e. V. All rights reserved.
      </p>
    </div>
  );
};

export default Impressum;
