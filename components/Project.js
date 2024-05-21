import styles from "../styles/Project.module.css";
import mymoviz from "../public/mymoviz_project.png";
import Ecna from "../public/ECNA.png";
import locapic from "../public/Locapic.png";
import weatherApp from "../public/WeatherApp.jpg";
import ios from "../public/IOS.png";
import dream2car from "../public/dream2car.PNG";
import qrCodeLocapic from "../public/qrCode_locapic.png";
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
        "Locapic is a project which has created in React Native. In this app you can save and display the big towns of France on a map",
      qrcode: qrCodeLocapic,
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
        "In building... Flash this QR code and use: 'John' or 'Brice' & password: 123 on Homepage",
      src: Ecna,
    },
    {
      title: "The setup",
      description:
        "Cinewhoop for the interior and Manta 6 by axisflying for outside mid/long range",
      src: setup,
    },
    {
      title: "Dream2car",
      description:"Competition site to win a car",
      src: dream2car,
      link: (
        <a href="https://www.dream2car.com">
          {" "}
          <p className={styles.iconlink}>
            {" "}
            Demo <IoEarth />
          </p>
        </a>
      ),
    },
  ];

  const allImg = IMAGES.map((data, i) => {
    if (i == 1) {
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
    if (i == 5) {
      return (
        <div key={i} className={styles.icons}>
        <Image src={data.src} className={styles.iconsimg} />
        <div className={styles.description} style={{width: '100%'}}>
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
