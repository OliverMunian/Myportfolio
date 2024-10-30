import styles from "../styles/Project.module.css";
import mymoviz from "../public/mymoviz_project.png";
import iphone from "../public/iphone.png";
import LaCapsule from "../public/La_capsule_logo.png";
import locapic from "../public/Locapic.png";
import weatherApp from "../public/WeatherApp.jpg";
import dream2car from "../public/dream2car.PNG";
import qrCodeLocapic from "../public/qrCode_locapic.png";
import setup from "../public/Setup.png";
import Fpv from "./FPV";
import { RiToolsFill } from "react-icons/ri";
import { IoEarth } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaMapPin } from "react-icons/fa";
import { MdSwipe } from "react-icons/md";
import Slider from "./Slider";
import Image from "next/image";
import Tools from "./Tools";
import MuxPlayer from "@mux/mux-player-react";

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
      title: "The setup",
      description:
        "Cinewhoop for the interior and Manta 6 by axisflying for outside mid/long range",
      src: setup,
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
    // if (i == 3) {
    //   return (
    //     <div className={styles.icons3}>
    //       <Image src={data.src} className={styles.iconsimg} />
    //       <div className={styles.description3}>
    //         <h1>{data.title}</h1>
    //         <Image src={data.qrcode} className={styles.qrcode} />
    //         <p>{data.description}</p>
    //         <div className={styles.link}>
    //           <p>{data.link}</p>
    //         </div>
    //       </div>
    //     </div>
    //   );
    // }
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
          <div className={styles.description} style={{ width: "100%" }}>
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
      {/* <div className={styles.aboutme}>
        <h1>About me</h1>
        <p>
          I recently decide to move to Sweden, I am 30 years old, born and raised
          in Paris. I recently decided to move to Sweden because i’m curious
          about Swedish culture. NowI’m looking for a new work experience in
          Stockholm as a full stack web developer, that will give me some new
          opportunities to increase my skills and learn more. Ready to bring a
          fresh perspective to your team and tackle new challenges in the web
          development world{" "}
        </p>
      </div> */}
      <div className={styles.video}>
        <div className={styles.videoBox}>
          <Image src={iphone} className={styles.iphone} />
          <MuxPlayer
            streamType="on-demand"
            playbackId="HNaomUlHcXVTr6nQmds1NoxjnJWmByWt2GIji5k9KTw"
            metadataViewerUserId="Placeholder (optional)"
            primaryColor="transparent"
            secondaryColor="transparent"
            autoPlay="muted"
            loop
            className={styles.player}
            style={{
              "--controls": "none",
            }}
          />
        </div>
        <div className={styles.ecnadescription}>
          <h1 className={styles.title}>
            ECNA - <span className={styles.italic}>Time is now yours</span>
          </h1>
          <p className={styles.ecnaDetail}>
            Before moving to Sweden, I worked in ambulance in France during many
            years. <br /> <br />
            So I decided to convert myself as a web developer to create my own
            app to help ambulances companies to have a better organization at
            work and mainly save time during the day to help more patients.{" "}
            <br />
            I brought them new features to have access to their own vehicle
            fleet and a part of the activity about the company and also the
            activity of their collaborators <br />
          </p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              fontStyle: "italic",
              marginTop: "10px",
            }}
          >
            <p className={styles.inProgress}>The app is still in progress...</p>
            <RiToolsFill size={30} color={"white"} />
          </div>
        </div>
      </div>
      <div className={styles.otherProjects}>
        <div className={styles.projectsFirstPart}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginRight: "20px",
            }}
          >
            <h1 className={styles.title}> La Capsule - Coding Bootcamp</h1>
            <div
              style={{ display: "flex", color: "white", fontStyle: "italic" }}
            >
              <FaMapPin color />
              <p>56 boulevard Perreire, Paris 17e - France </p>
            </div>
          </div>
          <div className={styles.lacapsule}>
            <Image src={LaCapsule} width={100} height={100} />
          </div>
        </div>
        <div className={styles.boxProjects}>
          <div className={styles.firstPartDescription}>
            <p
              style={{
                color: "white",
                fontStyle: "italic",
                marginTop: "10px",
                fontSize: "18px",
              }}
            >
              I joined the La Capsule Bootcamp in 2023 to start my reconversion
              as web developer fullstack. During intensives 10 weeks, I learned
              how to code and build projects with differents languages.
              <br />
              My mentors taught me how to build the beginning of my mobile app,
              and give me the keys to reach my goals.
              <br />
              <br />
              Here some few small projects that I did in the Bootcamp
              <br />
            </p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: "50px",
              }}
            >
              Swipe right/left to see the projects{" "}
              <MdSwipe style={{ marginLeft: "10px" }} size={20} />
            </div>
          </div>
          <Slider />
        </div>
        <Fpv />
      </div>
    </div>
  );
}

export default Project;
