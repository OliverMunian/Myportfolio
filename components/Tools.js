import expressicons from "../public/expressjs_icon.svg";
import githubicons from "../public/Git_logo.png";
import mongodbicons from "../public/mongodb-icon.svg";
import nodejsicons from "../public/nodejs_icon.svg";
import reactjsicons from "../public/reactjs-icon.svg";
import javascripticons from "../public/javascript_logopng.png";
import nextjsicons from "../public/nextjs_icon.png";
import redux from "../public/redux.svg";
import reactnative from "../public/reactnative_icon.png";
import Image from "next/image";
import styles from "../styles/Tools.module.css";

function Tools() {
  const pictures = [
    { src: expressicons, name: "ExpressJs" },
    { src: githubicons, name: "Git" },
    { src: mongodbicons, name: "MongoDb" },
    { src: nodejsicons, name: "NodeJS" },
    { src: reactjsicons, name: "React" },
    { src: javascripticons, name: "Javascript" },
    { src: nextjsicons, name: "NextJS" },
    { src: reactnative, name: "Native" },
    { src: redux, name: "Redux" },
  ];

  const allImg = pictures.map((data, i) => {
    if(data.name == "Git"){
      return (
        <div key={i} className={styles.icons}>
          <Image
            src={data.src}
            width={100}
            height={100}
            className={styles.image}
          />
          <p className={styles.name}>{data.name}</p>
        </div>
      );
    }
    return (
      <div key={i} className={styles.icons}>
        <Image
          src={data.src}
          width={50}
          height={50}
          className={styles.image}
        />
        <p className={styles.name}>{data.name}</p>
      </div>
    );
  });

  return <div className={styles.containertools}>{allImg}</div>;
}

export default Tools;
