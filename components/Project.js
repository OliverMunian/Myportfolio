import styles from "../styles/Project.module.css";
import mymoviz from "../public/mymoviz_project.png";
import Ecna from "../public/ECNA.jpeg";
import locapic from "../public/Locapic.jpeg";
import weatherApp from "../public/WeatherApp.jpg";
import ImageSlider from "./ImageSlider";
import { IoEarth } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";

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
      title: "Ecna",
      description:
        "ECNA is my personal project that i started with collaborators at La Capsule. This is a mobile application for ambulances, build with React Native.",
      src: Ecna,
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
            {" "}
            <p className={styles.iconlink}>
              {" "}
              Frontend <FaGithub />
            </p>
          </a>
          <a href="https://github.com/OliverMunian/WeatherApp_Backend">
            {" "}
            <p className={styles.iconlink}>
              {" "}
              Backend <FaGithub />
            </p>
          </a>
        </div>
      ),
    },
  ];
  return (
    <div className={styles.main} id="Project">
      <div className={styles.divtitle}>
        <h1 className={styles.title}>Projects</h1>
      </div>
      <div>
        <ImageSlider
          imageUrls={IMAGES}
          width={50}
          height={50}
          title={IMAGES}
          description={IMAGES}
        />
      </div>
    </div>
  );
}

export default Project;
