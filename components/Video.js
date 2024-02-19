import styles from "../styles/video.module.css";
import Video from "next-video";
import fpvdrone from "../videos/FPV_drone.mp4";
import MuxPlayer from "@mux/mux-player-react";

function video() {
  return (
    <div className={styles.main}>
      {/* <Video src={fpvdrone} autoplay loop muted primary-color='#f2b129' controlslist='nofullscreen'/> */}
      <MuxPlayer
        streamType="on-demand"
        playbackId="Nxlq2A3kxACIC1y7ixPl7PH5So1tA01jDJsaPAoJl74k"
        metadataViewerUserId="Placeholder (optional)"
        primaryColor="transparent"
        secondaryColor="transparent"
        autoPlay
        loop
        muted
      style={{'--controls': 'none'}}/>
      <div className={styles.comments}>
        <h1>FPV Drone</h1>
        <p>Training session - Quick flight outside </p>
      </div>
    </div>
  );
}

export default video;
