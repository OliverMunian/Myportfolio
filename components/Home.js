import styles from "../styles/Home.module.css";
import {
  FaLinkedinIn,
  FaGithub,
  FaFileDownload,
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
} from "react-icons/fa";
import Header from "./Header";
import Backgroundimage from "../public/Olivier.jpg";
import LanguagesTools from "./LanguagesTools";
import Project from "./Project";
import { useTypewriter, Cursor } from "react-simple-typewriter";
// import { FaLinkedinIn, FaGithub, FaFileDownload } from "react-icons/fa";
import { Link } from "react-scroll";
import Footer from "./Footer";
import { useState } from "react";
import Modal from './Modal'

function Home() {
  const [text] = useTypewriter({
    words: ["Developer Frontend", "Developer Backend", "Developer FullStack"],
    loop: {},
  });
  const [openContactForm, setOpenContactForm] = useState(false);

  function openWindow() {
    setOpenContactForm(true);
  }

  function closeWindow() {
    setOpenContactForm(false);
  }
  return (
    <div>
      <div className={styles.container}>
        <Header />
        <img className={styles.profil} src="Olivier.jpg" />
        <div className={styles.body}>
          <h1>Olivier Malahel</h1>
          <br />
          <div className={styles.allstatus}>
            <p>I am <span className={styles.status}>{text}</span>
            <span>
              <Cursor cursorStyle="_" />
            </span>
            </p>
          </div>
          <p>I am available now to support you in your projects</p>
          <div className={styles.contact} onClick={openWindow}>
            Contact
          </div>
          {openContactForm && <Modal closeWindow={closeWindow}/>}
          <div className={styles.logobox}>
            <div className={styles.logo}>
              <a href="CV.pdf" download="CV.pdf">
                <FaFileDownload size={40} className={styles.icons} />
              </a>
              <a href="https://www.linkedin.com/in/oliviermalahel/">
                <FaLinkedinIn size={40} className={styles.icons} />
              </a>
              <a href="https://github.com/OliverMunian?tab=repositories">
                <FaGithub size={40} className={styles.icons} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <LanguagesTools />
      <Project />
      <Footer />
    </div>
  );
}

export default Home;
