import expressicons from "../public/expressjs_icon.svg";
import githubicons from "../public/github-icons.png";
import mongodbicons from "../public/mongodb-icon.svg";
import nodejsicons from "../public/nodejs_icon.svg";
import reactjsicons from "../public/reactjs-icon.svg";
import javascripticons from "../public/javascript_logopng.png";
import nextjsicons from "../public/nextjs_icon.png";
import redux from '../public/redux.svg'
import reactnative from "../public/reactnative_icon.png";
import styles from "../styles/LanguagesTools.module.css";
import Image from "next/image";

function LanguagesTools() {
  const pictures = [
    { src: expressicons, name: "ExpressJs" },
    { src: githubicons, name: "Github" },
    { src: mongodbicons, name: "MongoDb" },
    { src: nodejsicons, name: "NodeJS" },
    { src: reactjsicons, name: "React" },
    { src: javascripticons, name: "Javascript" },
    { src: nextjsicons, name: "NextJS" },
    { src: reactnative, name: "React Native" },
    { src: redux, name: "Redux"}
  ];

  const allImg = pictures.map((data, i) => {
    return (
      <div key={i} className={styles.icons}>
        <Image src={data.src} width={40} height={40} className={styles.iconsimg} />
        <p className={styles.name}>{data.name}</p>

      </div>
    );
  });

  return (
    <div className={styles.background} id='tools'>
      <h1 className={styles.title}>Languages & Tools</h1>
      <div className={styles.listtools}>{allImg}</div>
    </div>
  );
}

export default LanguagesTools;
