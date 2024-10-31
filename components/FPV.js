import styles from "../styles/fpv.module.css";
import MuxPlayer from "@mux/mux-player-react";
import { TbDrone } from "react-icons/tb";
import { FaYoutube } from "react-icons/fa";
import { IoGameController } from "react-icons/io5";

function Fpv() {
  return (
    <div className={styles.main}>
      <div className={styles.fpvDroneDescription}>
        <div className={styles.description}>
          <h1 className={styles.title}>
            FPV Drone <TbDrone size={30} />
          </h1>
          <p style={{ fonSize: "11px", color: "white" }}>
            First Person View Drone
          </p>
          <p className={styles.subDescription}>
            I started to learn how to pilot in the end of 2023, to offer you the
            best immersive experience for yours videos or yours
            websites/applications. <br />
            With my fleet of drones, I have many possibilities to propose you
            the best plans for your projects (indoor, cinematic, freestyle...)
            <br />
            <br />
            You can take a look about my differents projects that I did in
            differents places.
            <br />
            <br />
            Let me know if you have some interested project that you want to
            realize
          </p>
        </div>
        <div className={styles.boxVideo}>
          <div className={styles.summerHouseBox}>
            <MuxPlayer
              streamType="on-demand"
              playbackId="nI6AtOKeau5K00XNH01mrNAB9WBZkAgeEeqWvL00oSYZRY"
              metadataViewerUserId="Placeholder (optional)"
              primaryColor="transparent"
              secondaryColor="transparent"
              autoPlay="muted"
              loop
              style={{
                "--controls": "none",
              }}
            />
            <div
              className={styles.videosDescription}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <p style={{ textAlign: "center" }}>Marie & Viktor 💍</p>
              <p style={{ textAlign: "center" }}>
                📍 Västerfärnebo - Sweden 🇸🇪
              </p>
            </div>
          </div>
          <div className={styles.videos}>
            <div className={styles.yumsBox}>
              <MuxPlayer
                streamType="on-demand"
                playbackId="JBx9JBcVwTKd02E7casKXZuXfS01ek7zhayY01xGgVnmJQ"
                metadataViewerUserId="Placeholder (optional)"
                primaryColor="transparent"
                secondaryColor="transparent"
                autoPlay="muted"
                loop
                style={{
                  "--controls": "none",
                }}
              />
              <div
                className={styles.videosDescription}
                style={{ alignItems: "center" }}
              >
                <p>Yum's Biker </p>
                <FaYoutube style={{ marginLeft: "5px" }} />
              </div>
            </div>
            <div className={styles.yumsBox}>
              <MuxPlayer
                streamType="on-demand"
                playbackId="EUkmpGCONFNwiDPqUjqNwJUPeTUmIxZoub4KrJCkgWs"
                metadataViewerUserId="Placeholder (optional)"
                primaryColor="transparent"
                secondaryColor="transparent"
                autoPlay="muted"
                loop
                style={{
                  "--controls": "none",
                }}
              />
              <div
                className={styles.videosDescription}
                style={{ alignItems: "center" }}
              >
                <p> Training - Liftoff </p>
                <IoGameController style={{ marginLeft: "5px" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fpv;
