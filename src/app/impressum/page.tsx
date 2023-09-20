import styles from "../page.module.css"

export default function Imprint() {
  return (
    <div className={styles.impressumContainer}>
      <h1>Impressum</h1>
      <p className={styles.impressumParagraph}>Landesverband Kinder- & Jugendfilm Berlin e. V.</p>
      <p className={styles.impressumParagraph}>Am Sudhaus 2</p>
      <p className={styles.impressumParagraph}>12053 Berlin</p>
      <p className={styles.impressumParagraph}>Vereinsregister Amtsgericht Charlottenburg | Registernummer VR 9413 Nz</p>
      <p className={styles.impressumParagraph}>VAT-ID/Umsatzsteuer-Identifikationsnummer: DE361265479</p>
      
      <p className={styles.impressumParagraph}>Vertretungsberechtigte Vorstandsmitglieder und verantwortliche Redakteure:</p>
      <ul className={styles.impressumList}>
        <li className={styles.impressumListItem}>Max Neu</li>
        <li className={styles.impressumListItem}>Ralf Schlotter</li>
        <li className={styles.impressumListItem}>Claudia Ziegenfuß</li>
      </ul>
      
      <p className={styles.impressumParagraph}>Ihr erreicht den Landesverband Kinder- & Jugendfilm Berlin e. V.:</p>
      <ul className={styles.impressumList}>
        <li className={styles.impressumListItem}>Postalisch unter der oben genannten Adresse</li>
        <li className={styles.impressumListItem}>Per Mail an <a href="mailto:info@kijufi.de" className={styles.impressumLink}>info@kijufi.de</a></li>
        <li className={styles.impressumListItem}>Telefonisch unter +49 (0) 30 609 51 369</li>
      </ul>

      <p className={styles.impressumParagraph}>Landesverband Kinder- und Jugendfilm Berlin e. V. All rights reserved.</p>
    </div>
  )
}