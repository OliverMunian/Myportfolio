import styles from "../styles/Header.module.css";
// import { FaLinkedinIn, FaGithub, FaFileDownload } from "react-icons/fa";
import { Link } from "react-scroll";

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.theme}>
        <div>
          <Link
            to="tools"
            spy={true}
            smooth={true}
            offset={30}
            duration={500}
            className={styles.txt}
          >
            Languages & tools
          </Link>
        </div>
        <div>
          <Link
            to="Project"
            spy={true}
            smooth={true}
            offset={30}
            duration={500}
            className={styles.txt}
          >
            Projects
          </Link>
        </div>
        <div>
          <Link
            to="Contact"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className={styles.txt}
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
