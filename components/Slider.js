import styles from "../styles/Slider.module.css";
import mymoviz from "../public/mymoviz_project.png";
import locapic from "../public/Locapic.png";
import weatherApp from "../public/WeatherApp.jpg";
import qrCodeLocapic from "../public/qrCode_locapic.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { IoEarth } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverFlow, Pagination } from "swiper";

function Slider() {
  const IMAGES = [
    {
      title: "MyMoviz",
      description:
        "One of the first projects that I did at La Capsule Bootcamp. We used a REST API to make a website. You can see the project here",
      src: mymoviz,
      link: (
        <a
          href="https://mymovies-frontend-eta.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          <p className={styles.iconlink}>
            Demo <IoEarth />
          </p>
        </a>
      ),
    },
    {
      title: "Locapic",
      description:
        "Locapic is a project created in React Native.\n In this app, you can save and display major cities of France on a map.",
      qrcode: qrCodeLocapic,
      src: locapic,
    },
    {
      title: "WeatherApp",
      description:
        "A small web application that uses an API to show the weather in different cities. You can find it on my GitHub.",
      src: weatherApp,
      link: (
        <div style={{ marginTop: "15px" }}>
          <a
            href="https://github.com/OliverMunian/WeatherApp_frontend"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            <p className={styles.iconlink}>
              Frontend <FaGithub />
            </p>
          </a>
          <a
            href="https://github.com/OliverMunian/WeatherApp_Backend"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            <p className={styles.iconlink} style={{ marginTop: "15px" }}>
              Backend <FaGithub />
            </p>
          </a>
        </div>
      ),
    },
  ];

  const allImg = IMAGES.map((data, i) => {
    console.log(data);
    if (data.title == "Locapic") {
      return (
        <SwiperSlide
          key={i}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div className={styles.swiperSlideLocapic}>
            <Image src={data.src} alt={data.title} />
            <div className={styles.projectDescriptionLocapic}>
              <p style={{ color: "white" }}>{data.description}</p>
              {data.link}
            </div>
            {/* <div>
              <p style={{ color: "white" }}>{data.description}</p>
            </div>
            {data.link} */}
          </div>
        </SwiperSlide>
      );
    }
    return (
      <SwiperSlide
        key={i}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <div className={styles.swiperSlide}>
          <Image src={data.src} alt={data.title} className={styles.image} />
          <div className={styles.projectDescription}>
            <p style={{ color: "white" }}>{data.description}</p>
            {data.link}
          </div>
        </div>
      </SwiperSlide>
    );
  });

  return (
    <div className={styles.container}>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        // modules={[EffectCoverFlow, Pagination]}
        className="mySwiper"
      >
        {allImg}
        {/* {IMAGES.map((data, i) => (
            if(data.title){
                
            }
          <SwiperSlide key={i} style={{display:'flex', justifyContent:'center'}}>
            <div className={styles.swiperSlide}>
              <Image src={data.src} alt={data.title} className={styles.image} />
              <p>{data.description}</p>
              {data.link}
            </div>
          </SwiperSlide>
        ))} */}
      </Swiper>
    </div>
  );
}

export default Slider;
