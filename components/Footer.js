import styles from "../styles/Footer.module.css";
import Modal from "./Modal";
import { useState } from "react";

function Footer() {
  const [openContactForm, setOpenContactForm] = useState(false);

  const mail = "mailto:omalalhel@gmail.com?subject=SendMail&body=Description";

  function openWindow() {
    setOpenContactForm(true);
  }

  function closeWindow() {
    setOpenContactForm(false);
  }
  return (
    <div className={styles.footer} id="Contact">
      <h1>Contact</h1>
      <div className={styles.form}>
        <p>
          If you have any questions, projects or you just need an answer:
          <p className={styles.contactform} onClick={openWindow}>
            Contact form {"\n"}{" "}
          </p>
          <p>✆ +33698453977{"\n"} </p>
          <a href={mail} className="email">
            ✉️ Send email
          </a>
        </p>
      </div>
      {openContactForm && <Modal closeWindow={closeWindow} />}
    </div>
  );
}

export default Footer;
