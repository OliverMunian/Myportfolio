import { useState } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import Image from "next/image";
import styles from "../styles/ImageSlider.module.css";

function ImageSlider({ imageUrls }) {
  const [imageIndex, setImageindex] = useState(0);

  function showNextimage() {
    setImageindex((index) => {
      if (index === imageUrls.length - 1) return 0;
      return index + 1;
    });
  }

  function showPrevImage() {
    setImageindex((index) => {
      if (index === 0) return imageUrls.length - 1;
      return index - 1;
    });
  }
  return (
    <div className={styles.slider}>
      <div className={styles.imagesSlider}>
        <Image src={imageUrls[imageIndex].src} />
        <div className={styles.infos}>
          <h1 className={styles.imagetitle}>{imageUrls[imageIndex].title}</h1>
          <p className={styles.imagedescription}>{imageUrls[imageIndex].description} {imageUrls[imageIndex].link}</p>
        </div>
      </div>
      <div className={styles.buttons}>
        <button className={styles.imgsliderbtn} onClick={showPrevImage}>
          <FaArrowAltCircleLeft size={20} />
        </button>
        <button className={styles.imgsliderbtn} onClick={showNextimage}>
          <FaArrowAltCircleRight size={20} />
        </button>
      </div>
    </div>
  );
}

export default ImageSlider;
