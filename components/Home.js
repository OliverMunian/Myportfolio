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
import Header from "./Header";
import { useTypewriter, Cursor } from "react-simple-typewriter";
// import { FaLinkedinIn, FaGithub, FaFileDownload } from "react-icons/fa";
import { Link } from "react-scroll";
import { useState } from "react";
import Modal from "./Modal";
import expressicons from "../public/expressjs_icon.svg";
import githubicons from "../public/github-icons.png";
import mongodbicons from "../public/mongodb-icon.svg";
import nodejsicons from "../public/nodejs_icon.svg";
import reactjsicons from "../public/reactjs-icon.svg";
import javascripticons from "../public/javascript_logopng.png";
import nextjsicons from "../public/nextjs_icon.png";
import redux from "../public/redux.svg";
import reactnative from "../public/reactnative_icon.png";
import Image from "next/image";

function Home() {
  const [text] = useTypewriter({
    words: ["Developer Frontend", "Developer Backend", "Developer FullStack"],
    loop: {},
  });

  const darkMode = () => {
    console.log(localStorage.getItem("theme"));
  };

  return (
    <div className={styles.main}>
      <Header />
      <div className={styles.container}>
        <div className={styles.identification}>
          <img className={styles.profil} src="Olivier.png" />
          <div className={styles.body}>
            <div className={styles.allstatus}>
              <p>
                <span className={styles.status}>{text}</span>
                <span>
                  <Cursor cursorStyle="_" />
                </span>
              </p>
            </div>
            <div>
              <h1>Olivier Malahel</h1>
              <p className={styles.description}>
                I am available now to support you in your projects
              </p>
            </div>
            <div className={styles.moon} onClick={darkMode}>
              <p>
                <GoMoon />
              </p>
            </div>
          </div>
        </div>
        <Project />
      </div>
    </div>
  );
}

export default Home;
