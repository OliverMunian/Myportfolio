import styles from "../styles/Project.module.css";
import mymoviz from "../public/mymoviz_project.png";
import Ecna from "../public/ECNA.png";
import locapic from "../public/Locapic.jpeg";
import weatherApp from "../public/WeatherApp.jpg";
import ios from "../public/IOS.png";
import setup from "../public/Setup.png";
import { IoEarth } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import Tools from "./Tools";

function Project() {
  const IMAGES = [
    {
      title: "MyMoviz",
      description:
        "One of the first project that i did at La Capsule Bootcamp. We used an API REST to make a website. You can see the project here",
      src: mymoviz,
      link: (
        <a href="https://mymovies-frontend-eta.vercel.app/">
          {" "}
          <p className={styles.iconlink}>
            {" "}
            Demo <IoEarth />
          </p>
        </a>
      ),
    },
    {
      title: "Locapic",
      description:
        "Locapic is a project which was made in React Native, at La Capsule Bootcamp. In this app you're be able to put a pin to save the differents places in the map of France",
      src: locapic,
    },
    {
      title: "WeatherApp",
      description:
        "A little web application in using an API to have the weather in differents towns. You can find it on my GitHub",
      src: weatherApp,
      link: (
        <div>
          <a href="https://github.com/OliverMunian/WeatherApp_frontend">
            <p className={styles.iconlink}>
              Frontend <FaGithub />
            </p>
          </a>
          <a href="https://github.com/OliverMunian/WeatherApp_Backend">
            <p className={styles.iconlink}>
              Backend <FaGithub />
            </p>
          </a>
        </div>
      ),
    },
    {
      title: "Ecna",
      qrcode: ios,
      description:
        "In building... Flash this QR code with an Iphone use: 'Olivier' or 'Brice' - password: 123 on Homepage",
      src: Ecna,
    },
    {
      title: "The setup",
      description:
        "Cinewhoop for the interior and Manta 6 by axisflying for outside mid/long range",
      src: setup,
    },
  ];

  const allImg = IMAGES.map((data, i) => {
    if (i == 2) {
      return (
        <div className={styles.icons2}>
          <Image src={data.src} className={styles.iconsimg} />
          <div className={styles.description}>
            <h1>{data.title}</h1>
            <p>{data.description}</p>
            <div className={styles.link}>
              <p>{data.link}</p>
            </div>
          </div>
        </div>
      );
    }
    if (i == 3) {
      return (
        <div className={styles.icons3}>
          <Image src={data.src} className={styles.iconsimg} />
          <div className={styles.description3}>
            <h1>{data.title}</h1>
            <Image src={data.qrcode} className={styles.qrcode} />
            <p>{data.description}</p>
            <div className={styles.link}>
              <p>{data.link}</p>
            </div>
          </div>
        </div>
      );
    }
    if (i == 4) {
      return (
        <div className={styles.icons4}>
          <Image src={data.src} className={styles.iconsimg} />
          <div className={styles.description}>
            <h1>{data.title}</h1>
            <p>{data.description}</p>
            <div className={styles.link}>
              <p>{data.link}</p>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div key={i} className={styles.icons}>
        <Image src={data.src} className={styles.iconsimg} />
        <div className={styles.description}>
          <h1>{data.title}</h1>
          <p>{data.description}</p>
          <div className={styles.link}>
            <p>{data.link}</p>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className={styles.main}>
      <Tools />
      <div className={styles.allimg}>{allImg}</div>
    </div>
  );
}

export default Project;
