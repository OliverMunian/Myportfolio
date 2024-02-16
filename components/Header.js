import styles from "../styles/Header.module.css";
// import { FaLinkedinIn, FaGithub, FaFileDownload } from "react-icons/fa";
import { Link } from "react-scroll";
import {
  FaLinkedinIn,
  FaGithub,
  FaFileDownload,
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
} from "react-icons/fa";

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.theme}>
        <div className={styles.mailcv}>
          <div className={styles.mail}>
            <p>omalahel@gmail.com</p>
            <button className={styles.btns}>
              <p><a href="mailto:omalahel@gmail.com">Contact</a></p>
            </button>
          </div>
          <div className={styles.divcv}>
            <button className={styles.cv}>
            <a href="CV.pdf" download="CV.pdf">CV</a>
            </button>
          </div>
        </div>
        <div className={styles.logobox}>
            <div className={styles.logo}>
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
  );
}

export default Header;
