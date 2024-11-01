import styles from "../styles/video.module.css";
import Video from "next-video";
import Header from "./Header";
import MuxPlayer from "@mux/mux-player-react";
import { useTypewriter, Cursor } from "react-simple-typewriter";


function video() {
  const [text] = useTypewriter({
    words: ["Developer FullStack", "FPV Drone Pilot"],
    loop: {},
  });

  return (
    <div style={{ position: "relative" }}>
      <Header style={{position:'absolute', zIndex:3}} />
      <div className={styles.main}>
        <MuxPlayer
          streamType="on-demand"
          playbackId="mUvCLZfO8q00v00uDIcrFREa00lUFdZMyKvQKSUJSDOI400"
          metadataViewerUserId="Placeholder (optional)"
          primaryColor="transparent"
          secondaryColor="transparent"
          autoPlay="muted"
          loop
          className={styles.video}
          style={{
            "--controls": "none",
          }}
        />
      </div>
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
            <div className={styles.subDescription}>
              <h1 className={styles.description}> Olivier Malahel</h1>
              <p
                className={styles.description}
                style={{
                  fontStyle: "italic",
                  fontSize: 15,
                  textAlign: "center",
                  marginTop: 10,
                }}
              >
                I am available now to support you in your projects
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default video;
