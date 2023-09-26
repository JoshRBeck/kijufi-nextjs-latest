"use client"
import styles from "../app/page.module.css";
import { useState } from "react";

function KontaktForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    betreff: "",
    nachricht: "",
  });
  const handleInputChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const response = await fetch("/api/send-email", {
      method: "POST",
      body: JSON.stringify(formData),
    });
    if (response.ok) {
      console.log("Email Sent Successfully!");
    } else {
      console.log("Email sending failed");
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className={styles.formContainer}>
        <h2 className={styles.formTitle}>Wir freuen uns von dir zu hören!</h2>
        <div className={styles.formField}>
          <label htmlFor="name"></label>
          <input
            placeholder="Dein Name"
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className={styles.inputField}
          />
        </div>
        <div className={styles.formField}>
          <label htmlFor="email"></label>
          <input
            placeholder="Deine Email Addresse"
            type="text"
            id="email"
            value={formData.email}
            onChange={handleInputChange}
            className={styles.inputField}
          />
        </div>
        <div className={styles.formField}>
          <label htmlFor="betreff"></label>
          <textarea
            placeholder="Betreff"
            id="betreff"
            name="betreff"
            value={formData.betreff}
            onChange={handleInputChange}
            className={styles.textAreaField}
          />
        </div>
        <div className={styles.formField}>
          <label htmlFor="nachricht"></label>
          <textarea
            placeholder="Nachricht"
            id="nachricht"
            name="nachricht"
            value={formData.nachricht}
            onChange={handleInputChange}
            className={styles.textAreaField}
          />
        </div>
        <button type="submit" className={styles.submitButton}>
          Senden
        </button>
      </form>
    </div>
  );
}

export default KontaktForm;
