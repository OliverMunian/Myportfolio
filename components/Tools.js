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
import styles from "../styles/Tools.module.css";
import Video from "./Video"

function Tools() {
  const pictures = [
    { src: expressicons, name: "ExpressJs" },
    { src: githubicons, name: "Github" },
    { src: mongodbicons, name: "MongoDb" },
    { src: nodejsicons, name: "NodeJS" },
    { src: reactjsicons, name: "React" },
    { src: javascripticons, name: "Javascript" },
    { src: nextjsicons, name: "NextJS" },
    { src: reactnative, name: "React Native" },
    { src: redux, name: "Redux" },
  ];

  const allImg = pictures.map((data, i) => {
    return (
      <div key={i} className={styles.icons}>
        <Image
          src={data.src}
          width={30}
          height={30}
          className={styles.iconsimg}
        />
        <p className={styles.name}>{data.name}</p>
      </div>
    );
  });

  return (
    <div className={styles.containertools}>
      <div className={styles.tools}>{allImg}</div>
      <Video/>
    </div>
  );
}

export default Tools;
