import styles from "../page.module.css";

export default function Datenschutz() {
  return (
    <div>
      <h1 className={styles.datenschutzTitle}>Datenschutzerklärung</h1>
      <p className={styles.datenschutzParagraphs}>
        Wir freuen uns über Ihren Besuch auf unserer Webseite. KIJUFI ist sich
        der Bedeutung von Datenschutz und -sicherheit bewusst. Im Folgenden
        informieren wir deshalb über die Erhebung personenbezogener Daten bei
        Nutzung unserer Webseite:
      </p>
      {/* First Section */}
      <h2 className={styles.datenschutzHeadings}>
        1. Verantwortliche Stelle und Datenschutzbeauftragte
      </h2>
      <p className={styles.datenschutzParagraphs}>
        Landesverband Kinder- und Jugendfilm Berlin e.V. (kijufi)
        <br />
        Am Sudhaus 21
        <br />
        2053 Berlin
        <br />
        Telefon: 030 60 98 86 55
        <br />
        E-Mail: info@kijufi.de
        <br />
        Unseren Datenschutzbeauftragten erreichen Sie unter
        datenschutz@kijufi.de oder unter unserer Postadresse mit dem Zusatz
        „Datenschutzbeauftragter“.
      </p>
      {/* Second Section */}
      <h2 className={styles.datenschutzHeadings}>
        2. Allgemeine Datenverarbeitung beim Aufruf unserer Webseite
      </h2>
      <p className={styles.datenschutzParagraphs}>
        Die Website www.kijufi.de wird gehostet von jugendnetz-berlin.de. Um den
        Schutz Ihrer Daten zu gewährleisten, haben wir mit jugendnetz-berlin.de
        einen Vertrag zur Auftragsverarbeitung nach §28 DSGVO abgeschlossen.
        Ihre Daten, gegebenenfalls auch personenbezogene Daten, können auf den
        Servern von jugendnetz-berlin.de gespeichert werden.
      </p>
      <p className={styles.datenschutzParagraphs}>
        Sofern Sie unsere Webseite lediglich aufrufen, uns aber keinerlei
        Informationen zukommen lassen (beispielsweise über ein Anmelde- oder
        Kontaktformular), sammelt der Webserver beim Aufruf unserer Webseite nur
        diejenigen Daten, die das von Ihnen benutzte Webbrowserprogramm
        automatisch übermittelt und speichert diese. Dazu gehören die folgenden
        Informationen:
      </p>
      <ul className={styles.datenschutzList}>
        <li className={styles.datenschutzListItems}>
          Informationen über den Browsertyp und die verwendete Version
        </li>
        <li className={styles.datenschutzListItems}>
          Das Betriebssystem des Nutzers/der Nutzerin
        </li>
        <li className={styles.datenschutzListItems}>
          Den Internet-Service-Provider des Nutzers/der Nutzerin
        </li>
        <li className={styles.datenschutzListItems}>
          Die IP-Adresse des Nutzers/der Nutzerin
        </li>
        <li className={styles.datenschutzListItems}>
          Zugriffsstatus/HTTP-Statuscode
        </li>
        <li className={styles.datenschutzListItems}>
          Datum und Uhrzeit des Zugriffs
        </li>
        <li className={styles.datenschutzListItems}>
          Webseiten, von denen das System des Nutzers/der Nutzerin auf unsere
          Internetseite gelangt
        </li>
        <li className={styles.datenschutzListItems}>
          Webseiten, die vom System des Nutzers über unsere Webseite aufgerufen
          werden
        </li>
      </ul>
      <p className={styles.datenschutzParagraphs}>
        Durch die Nutzung dieser Website erklären Sie sich mit der Speicherung,
        Aufbewahrung und Verwendung dieser Daten durch jugendnetz-berlin.de
        entsprechend der Datenschutzerklärung von jugendnetz-berlin.de
        einverstanden. Die Datenschutzerklärung von jugendnetz-berlin.de finden
        Sie{" "}
        <a href="http://www.jugendnetz-berlin.de/de/datenschutzerklaerung/">
          hier
        </a>
      </p>
      <p className={styles.datenschutzParagraphs}>
        Als Content-Management-System, über das wir die Website www.kijufi.de
        verwalten, nutzen wir das Open-Source-Programm WordPress. Auf den
        Servern von WordPress werden keine Daten gespeichert, da die Website
        www.kijufi.de von jugendnetz-berlin.de gehostet wird.
      </p>
      {/* Third Section */}
      <h2 className={styles.datenschutzHeadings}>
        3. Kontaktaufnahme / Anmeldung zur Teilnahme an Projekten und Angeboten
      </h2>
      <p className={styles.datenschutzParagraphs}>
        Wenn Sie das auf der Webseite angebotene Kontakt- bzw. Anmeldeformular
        benutzen möchten, um mit uns in Kontakt zu treten, benötigen wir die im
        Formular abgefragten Daten zur Beantwortung Ihrer Anfrage. Einige Daten
        werden dabei nur auf freiwilliger Basis erhoben. Diese Daten verwenden
        wir ausschließlich für die Bearbeitung Ihrer Anfrage und geben diese
        nicht an Dritte weiter. Dies gilt auch, wenn Sie per E-Mail mit uns
        Kontakt aufnehmen. Die Verarbeitung der in das Kontaktformular
        eingegebenen oder per E-Mail gesendeten Daten erfolgt ausschließlich auf
        Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO).
      </p>
      <p className={styles.datenschutzParagraphs}>
        Die erteilte Einwilligung zur Speicherung der Daten können Sie jederzeit
        widerrufen. Die Rechtmäßigkeit der bereits erfolgten
        Datenverarbeitungsvorgänge bleibt vom Widerruf unberührt. Die von Ihnen
        zum Zwecke der Kontaktaufnahme bei uns hinterlegten Daten werden von uns
        solange gespeichert, bis Sie uns zur Löschung auffordern oder
        gesetzliche Fristen die Löschung von uns erlauben oder verlangen.
      </p>
      <p className={styles.datenschutzParagraphs}>
        Diese Website nutzt die CRM-Software CentralStationCRM für die
        Speicherung und Verarbeitung Ihrer Kontaktaufnahme. Anbieter ist die
        42he GmbH, Marktstraße 10 – Gebäude E8, 50968 Köln, Deutschland.
        CentralStationCRM ist ein Dienst, mit dem u.a. Kunden organisiert und
        betreut werden können. Die von Ihnen zum Zwecke der Kontaktaufnahme
        eingegeben Daten werden auf den Servern von CentralStationCRM in
        Deutschland gespeichert.
      </p>
      <p className={styles.datenschutzParagraphs}>
        Wenn Sie keine weitere Verarbeitung durch CentralStationCRM wollen,
        müssen Sie den Betreiber dieser Webseite nach Ihrer Kontaktaufnahme
        darüber informieren.
      </p>
      <p className={styles.datenschutzParagraphs}>
        Datenanalyse durch CentralStationCRM – Mit Hilfe von CentralStationCRM
        ist es uns möglich die Anfragen über unsere Webseite besser zu
        organisieren und schneller beantworten zu können. CentralStationCRM
        ermöglicht es uns auch, unsere Kunden und Kontakte besser gruppieren zu
        können. Dadurch können wir zielgerichteter in Vertrieb und Marketing
        arbeiten. Die Datenverarbeitung erfolgt auf Grundlage Ihrer Einwilligung
        (Art. 6 Abs. 1 lit. a DSGVO). Sie können diese Einwilligung jederzeit
        widerrufen. Die Rechtmäßigkeit der bereits erfolgten
        Datenverarbeitungsvorgänge bleibt vom Widerruf unberührt. Die von Ihnen
        zum Zwecke der Kontaktaufnahme bei uns hinterlegten Daten werden von uns
        so lange gespeichert, bis diese von uns gelöscht werden.
      </p>
      <p className={styles.datenschutzParagraphs}>
        Näheres entnehmen Sie den Datenschutzbestimmungen von CentralStationCRM
        unter:{" "}
        <a href="https://centralstationcrm.net/www/privacy">
          https://centralstationcrm.net/www/privacy
        </a>
        . Wir haben mit CentralStationCRM einen Vertrag abgeschlossen, in dem
        wir CentralStationCRM verpflichten, die Daten unserer Kunden zu schützen
        und sie nicht an Dritte weiterzugeben. Dieser Vertrag kann unter
        folgendem Link eingesehen werden:{" "}
        <a href="https://centralstationcrm.de/avv">
          https://centralstationcrm.de/avv
        </a>
      </p>
      {/* Fourth Section */}
      <h2 className={styles.datenschutzHeadings}>4. Google reCAPTCHA</h2>
      <p className={styles.datenschutzParagraphs}>
        Wir nutzen “Google reCAPTCHA” (im Folgenden “reCAPTCHA”) auf unseren
        Websites. Anbieter ist die Google Inc., 1600 Amphitheatre Parkway,
        Mountain View, CA 94043, USA (“Google”). Mit reCAPTCHA soll überprüft
        werden, ob die Dateneingabe auf unseren Websites (z.B. in einem
        Kontaktformular) durch einen Menschen oder durch ein automatisiertes
        Programm erfolgt.
      </p>
      <p className={styles.datenschutzParagraphs}>
        Hierzu analysiert reCAPTCHA das Verhalten des Websitebesuchers anhand
        verschiedener Merkmale. Diese Analyse beginnt automatisch, sobald der
        Websitebesucher die Website betritt. Zur Analyse wertet reCAPTCHA
        verschiedene Informationen aus (z.B. IP-Adresse, Verweildauer des
        Websitebesuchers auf der Website oder vom Nutzer getätigte
        Mausbewegungen). Die bei der Analyse erfassten Daten werden an Google
        weitergeleitet. Die reCAPTCHA-Analysen laufen vollständig im
        Hintergrund. Websitebesucher werden nicht darauf hingewiesen, dass eine
        Analyse stattfindet.
      </p>
      <p className={styles.datenschutzParagraphs}>
        Die Datenverarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f
        DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse daran, seine
        Webangebote vor missbräuchlicher automatisierter Ausspähung und vor SPAM
        zu schützen.
      </p>
      <p className={styles.datenschutzParagraphs}>
        Weitere Informationen zu Google reCAPTCHA sowie die Datenschutzerklärung
        von Google entnehmen Sie folgenden Links:{" "}
        <a href="https://www.google.com/intl/de/policies/privacy/">
          https://www.google.com/intl/de/policies/privacy/
        </a>{" "}
        und{" "}
        <a href="https://www.google.com/recaptcha/intro/android.html">
          https://www.google.com/recaptcha/intro/android.html
        </a>
      </p>
      {/* Fifth Section */}
      <h2 className={styles.datenschutzHeadings}>
        5. Erweiterte Datenverwendung
      </h2>
      <p className={styles.datenschutzParagraphs}>
        Im Rahmen unserer Programme KIJUFI ist nach freiwilliger, gesondert zu
        erklärender und protokollierter Einwilligung in die „erweiterte
        Datenverwendung“ durch den/die Nutzer*in berechtigt, personenbezogene
        Daten sowie Profildaten und demografische Daten für folgende Zwecke zu
        verarbeiten:
      </p>
      <ul className={styles.datenschutzList}>
        <li className={styles.datenschutzListItems}>
          der Aufnahme in ein Teilnehmerverzeichnis
        </li>
        <li className={styles.datenschutzListItems}>
          der Zusendung von Informationen über unsere Angebote
        </li>
      </ul>
      <p className={styles.datenschutzParagraphs}>
        Rechtsgrundlage ist Ihre Einwilligung, Art. 6 Abs. 1 lit. a DSGVO.
        Weitere Informationen entnehmen Sie bitte den projektspezifischen
        Einverständniserklärungen und Teilnahmebedingungen, die wir Ihnen vor
        Projektbeginn auch noch einmal gesondert zusenden.
      </p>
      {/* Sixth Section */}
      <h2 className={styles.datenschutzHeadings}>
        6. Weitergabe Ihrer personenbezogenen Daten an Dritte
      </h2>
      <p className={styles.datenschutzParagraphs}>
        KIJUFI gibt Ihre personenbezogenen Daten grundsätzlich nicht an Dritte
        weiter, es sei denn, Sie haben vorher Ihre ausdrückliche Einwilligung
        erklärt oder es besteht eine gesetzliche Verpflichtung zur
        Datenweitergabe. Soweit Sie Ihre Einwilligung erteilt haben, können Sie
        sie jederzeit mit Wirkung für die Zukunft durch einfache Mitteilung per
        E-Mail an die Adresse datenschutz@kijufi.de widerrufen.
      </p>
      <p className={styles.datenschutzParagraphs}>
        Zur Datenverarbeitung und -sicherung personenbezogener Daten nutzen wir
        das Customer-Relation-Management-System von CRM CentralStation. Sofern
        externe Dienstleister mit Ihren personenbezogenen Daten in Berührung
        kommen, stellen wir durch technische und organisatorische Maßnahmen
        sowie Verträge nach Art. 28 DSGVO den Schutz Ihrer personenbezogenen
        Daten sicher.
      </p>
      {/* Seventh Section */}
      <h2 className={styles.datenschutzHeadings}>7. Google Maps</h2>
      <p className={styles.datenschutzParagraphs}>
        Diese Webseite benutzt zur Darstellung einer interaktiven Karte Google
        Places API, einen Kartendienst von Google Inc., 1600 Amphitheatre
        Parkway, Mountain View, CA 94043, USA („Google“). Bei der Nutzung von
        Google Maps auf unserer Webseite wird eine Verbindung mit dem Server von
        Google erforderlich sein. Dadurch können von Google auch Daten über die
        Nutzung der Maps-Funktionen (einschließlich Ihrer IP-Adresse) durch
        Besucher*innen der Webseite verarbeitet werden.
      </p>
      <p className={styles.datenschutzParagraphs}>
        Weitere Informationen entnehmen Sie bitte der Datenschutzerklärung von
        Google unter{" "}
        <a href="http://www.google.de/intl/de/policies/privacy/">
          http://www.google.de/intl/de/policies/privacy/
        </a>
        .
      </p>
      <p className={styles.datenschutzParagraphs}>
        Rechtsgrundlage für die Nutzung der Maps-Funktion ist unser berechtigtes
        Interesse unseren Nutzer*innen die Anfahrtsmöglichkeiten aufzuzeigen und
        dadurch unseren Service angenehmer zu gestalten, Art. 6 Abs. 1 S. 1 lit.
        f DSGVO.
      </p>
      {/* Eighth Section */}
      <h2 className={styles.datenschutzHeadings}>8. Social Bookmarks</h2>
      <p className={styles.datenschutzParagraphs}>
        Auf unseren Webseiten bieten wir Ihnen die Möglichkeit, die jeweilige
        aktuelle Seite in sogenannten Sozialen Netzwerken (Facebook, Instagram,
        YouTube) aufzurufen. Diese sind auf unserer Webseite lediglich als
        externer Link zu den entsprechenden Diensten eingebunden. Nach dem
        Anklicken der eingebundenen Grafik werden Sie auf die Seite des
        jeweiligen Anbieters weitergeleitet, d.h. erst dann werden
        Nutzerinformationen an den jeweiligen Anbieter übertragen. Sofern Sie
        nicht möchten, dass die genannten Sozialen Netzwerke Daten erhalten,
        klicken Sie die Grafiken bitte nicht an.
      </p>
      <p className={styles.datenschutzParagraphs}>
        Rechtsgrundlage für die Nutzung ist unser berechtigtes Interesse daran,
        unser Angebot zu optimieren und zu fördern, Art. 6 Abs. 1 lit. f DSGVO.
        Informationen zum Umgang mit Ihren personenbezogenen Daten durch die
        Sozialen Netzwerke entnehmen Sie bitte den jeweiligen
        Datenschutzbestimmungen der Anbieter:
      </p>
      <ul className={styles.datenschutzList}>
        <li className={styles.datenschutzListItems}>
          Facebook:{" "}
          <a href="https://de-de.facebook.com/policy.php">
            https://de-de.facebook.com/policy.php
          </a>
        </li>
        <li className={styles.datenschutzListItems}>
          Instagram:{" "}
          <a href="https://help.instagram.com/519522125107875">
            https://help.instagram.com/519522125107875
          </a>
        </li>
        <li className={styles.datenschutzListItems}>
          YouTube:{" "}
          <a href="https://policies.google.com/privacy?hl=de&gl=de">
            https://policies.google.com/privacy?hl=de&gl=de
          </a>
        </li>
      </ul>
      {/* Ninth Section */}
      <h2 className={styles.datenschutzHeadings}>9. Ihre Rechte</h2>
      <p className={styles.datenschutzParagraphs}>
        Sie haben gegenüber uns folgende Rechte hinsichtlich der Sie
        betreffenden personenbezogenen Daten:
      </p>
      <ol className={styles.datenschutzOrderedList}>
        <li className={styles.datenschutzListItems}>Allgemeine Rechte</li>
        <li className={styles.datenschutzListItems}>
          Rechte bei der Datenverarbeitung nach dem berechtigten Interesse
        </li>
        <li className={styles.datenschutzListItems}>
          Rechte bei Direktwerbung
        </li>
        <li className={styles.datenschutzListItems}>
          Recht auf Beschwerde bei einer Aufsichtsbehörde
        </li>
      </ol>

      <p className={styles.datenschutzParagraphs}>
        Sie haben zudem das Recht, sich bei einer zuständigen
        Datenschutz-Aufsichtsbehörde über die Verarbeitung Ihrer
        personenbezogenen Daten durch uns zu beschweren. Bei Fragen rund um das
        Thema Datenschutz und die Verarbeitung Ihrer personenbezogenen Daten,
        wenden Sie sich an unsere Datenschutzbeauftragte (Kontakt siehe oben).
        Diese steht Ihnen auch gerne bei Anträgen, Auskunftsersuchen, Anregungen
        oder Beschwerden zur Verfügung. Stand Januar 2019
      </p>
    </div>
  );
}
