import styles from "../styles/video.module.css";
import Video from "next-video";
import fpvdrone from "../videos/FPV_drone.mp4";

function video() {
  return (
    <div className={styles.main}>
      <Video src={fpvdrone} autoplay loop muted primary-color='#f2b129' nofullscreen/>
      <div className={styles.comments}>
        <h1>FPV Drone</h1>
        <p>Training session - Quick flight outside</p>
      </div>
    </div>
  );
}

export default video;
