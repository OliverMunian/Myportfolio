// "use client";
import Image from "next/image";
//Images
import MyMoviz from "../../public/mymoviz_project.png";
import Locapic from "../../public/Locapic.png";
import SodermalmBarbershop from "../../public/Sodermalm.jpg";
import MotionMoose from "../../public/motion_moose.jpg";
//icons
import { IoEarth } from "react-icons/io5";
import { ImScissors } from "react-icons/im";

//extensions
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination, EffectCards } from "swiper/modules";
import dynamic from "next/dynamic";
import MuxPlayer from "@mux/mux-player-react";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

function Slider() {
  const content = [
    {
      title: "MyMoviz",
      src: MyMoviz,
      link: "https://mymovies-frontend-eta.vercel.app/",
      icons: <IoEarth />,
      alt: "Project_Web_App",
    },
    {
      title: "Motion Moose",
      src: MotionMoose,
      alt: "Motion_Moose_Website",
      link: "https://moose-motion.vercel.app/",
    },
    {
      title: "Sodermalm Barbershop",
      src: SodermalmBarbershop,
      link: "https://sodermalm-barber-frontend.vercel.app/",
      icons: <ImScissors />,
      alt: "Barbershop",
    },
    // {
    //   url: "https://stream.mux.com/CAAYa01OPVm01AMIVr792xBo9fxijIRKZZLO8MoagkYw4.m3u8",
    //   title: "Albania - Girokaster",
    //   type: "video",
    // },
    // {
    //   url: "https://stream.mux.com/EUkmpGCONFNwiDPqUjqNwJUPeTUmIxZoub4KrJCkgWs.m3u8",
    //   title: "Training session on Liftoff",
    //   type: "video",
    // },
    // {
    //   url: "https://stream.mux.com/JBx9JBcVwTKd02E7casKXZuXfS01ek7zhayY01xGgVnmJQ.m3u8",
    //   title: "Yums Biker",
    //   type: "video",
    // },
  ];

  const contents = content.map((data, i) => {
    // if (data.type) {
    //   return (
    //     <SwiperSlide key={i}
    //     className="flex items-center justify-center w-10/12">
    //       {/* <div className="bg-black flex justify-center border-[0.75px] rounded-t-3xl border-white">
    //         <h1 className="font-bold font-Prompt">{data.title}</h1>
    //       </div> */}
    //       <ReactPlayer
    //       // className='w-full h-full border-2 border-green-400'
    //         url={data.url}
    //         controls={false}
    //         autoPlay={true}
    //         loop={true}
    //         playing
    //         muted
    //       />
    //     </SwiperSlide>
    //   );
    // }
    return (
      <SwiperSlide
        key={i}
        className="h-full flex items-center justify-center"
        // style={{ display: "flex", justifyContent: "center", alignItems:'center'}}
      >
        <a target="_blank" href={data.link}>
          <Image src={data.src} alt={data.alt} className="w-full" />
        </a>
      </SwiperSlide>
    );
  });

  return (
    <div className="flex h-full w-full items-center justify-center">
      <Swiper
        className="flex items-center justify-center w-full h-full "
        spaceBetween={50}
        // allowTouchMove={selected}
        effect={"cards"}
        cardsEffect={{
          slideShadows: false,
        }}
        grabCursor={true}
        modules={[EffectCards]}
        centeredSlides={false}
        slidesPerView={"auto"}
        pagination={{
          clickable: true,
        }}
      >
        {contents}
      </Swiper>
    </div>
  );
}
export default Slider;
