import styles from "../styles/Home.module.css";
import {
  FaLinkedinIn,
  FaGithub,
  FaFileDownload,
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
} from "react-icons/fa";
import { GoMoon } from "react-icons/go";
import Project from "./Project";
import Tools from "./Tools";
import Header from "./Header";
import Video from "./Video";
import Fpv from "./FPV";
import { useTypewriter, Cursor } from "react-simple-typewriter";
// import { FaLinkedinIn, FaGithub, FaFileDownload } from "react-icons/fa";

function Home() {
  return (
    <div className={styles.main}>
      <Video />
      <Tools/>
      <Project />
    </div>
  );
}

export default Home;
