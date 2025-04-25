"use client";
//Icons
import { IoIosSettings } from "react-icons/io";
import { IoImageOutline } from "react-icons/io5";
import { BsDatabaseFillGear } from "react-icons/bs";
import { FaPen } from "react-icons/fa6";
import { FaMobileAlt } from "react-icons/fa";
import { TbDrone } from "react-icons/tb";
import { RiPlaneLine } from "react-icons/ri";

//Extensions
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";


export default function AboutMe({ onSelectMenu }) {
  const [appointment, setAppointment] = useState(false);

  const services = [
    {
      index: "01",
      title: "Frontend developement",
      icons: (
        <IoImageOutline color="white" className="text-5xl max-lg:text-7xl" />
      ),
      description: (
        <>
          Let’s collaborate to define the perfect design for your website or web
          application, ensuring a visually engaging and immersive user
          experience.
        </>
      ),
    },

    {
      index: "02",
      title: "Backend developement",
      description: (
        <>
          Depending on the scope of your project, I can integrate essential
          features into your website or application,such as authentication,
          booking systems, email notifications, and more.
        </>
      ),
      icons: (
        <IoIosSettings color="white" className="text-5xl max-lg:text-7xl" />
      ),
    },
    {
      index: "03",
      title: "Database management",
      image: "",
      icons: (
        <BsDatabaseFillGear
          color="white"
          className="text-5xl max-lg:text-7xl"
        />
      ),
      description: (
        <>
          Enhance your project with a robust database to efficiently manage and
          access critical information.
        </>
      ),
    },
    {
      index: "03",
      title: "Mobile application",
      description: (
        <>
          Do you have an idea for a mobile application? <br />I can bring it to
          life using React Native, enabling seamless deployment on both iOS and
          Android platforms.
        </>
      ),
      icons: <FaMobileAlt color="white" className="text-5xl max-lg:text-7xl" />,
    },
    {
      index: "04",
      title: "FPV Drone",
      description: (
        <>
          Looking for a stunning aerial video for your event, website, or
          application? <br />
          Let’s bring your vision to life with my drone expertise.
        </>
      ),
      icons: <TbDrone color="white" className="text-5xl max-lg:text-7xl" />,
    },
  ];

  const displayServices = services.map((service, i) => {
    // if (service.title == "Backend developement") {
    //   return (
    //     <div
    //       key={i}
    //       className=" flex flex-col items-center justify-center border-[0.75px] border-white rounded-xl w-[20%] overflow-hidden max-lg:w-[70%] max-lg:my-8"
    //     >
    //       <div className="flex items-center border-b-[0.75px] w-[100%] h-[80px] p-3">
    //         <h1 className="font-inter font-normal text-xl text-center max-lg:text-base">
    //           {service.title}
    //         </h1>
    //       </div>

    //       <div className="bg-[#171717] size-full flex flex-col items-center justify-between z-10 relative p-4 rounded-t-3xl drop-shadow-md ">
    //         <div className="flex flex-col items-center justify-center ">
    //           <motion.div
    //             className="mr-8 max-lg:mr-6"
    //             animate={{ rotate: -360 }}
    //             transition={{
    //               repeat: Infinity,
    //               repeatType: "loop",
    //               duration: 20,
    //               ease: "linear",
    //             }}
    //           >
    //             {service.icons}
    //           </motion.div>

    //           <motion.div
    //             className="ml-8 -mt-5 max-lg:ml-6"
    //             initial={{ rotate: 35 }}
    //             animate={{ rotate: 360 }}
    //             transition={{
    //               repeat: Infinity,
    //               repeatType: "loop",
    //               duration: 20,
    //               ease: "linear",
    //             }}
    //           >
    //             {service.icons}
    //           </motion.div>
    //         </div>

    //         <div className="p-2 ">
    //           <p className="font-inter font-light text-center max-lg:text-sm">
    //             {service.description}
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   );
    // }
    return (
      <div
        key={i}
        className="flex items-start justify-between border-t-[0.75px] border-white px-3 py-5 hover:bg-gradient-to-r from-purple-500 to-purple-800"
      >
        <div className="w-1/6">
          <h1 className="font-inter font-bold text-4xl ">{service.index}</h1>
        </div>
        <div className="w-2/3 flex items-start justify-start">
          <h1 className="font-inter font-bold text-4xl">{service.title}</h1>
        </div>

        <div className="w-1/2">
          <p className="font-inter font-medium">{service.description}</p>
        </div>
        <div className="flex justify-end w-1/6">{service.icons}</div>
      </div>
    );
  });

  const displaySwiperServices = services.map((service, i) => {
    return (
      <SwiperSlide
        pagination={{
          el: ".swiper-pagination",
          clickable: true,
        }}
        key={i}
        className="flex flex-col items-start justify-start border-[0.75px] border-white rounded-xl w-[20%] overflow-hidden max-lg:w-[70%] h-full min-h-[270px]"
      >
        <div className="border-b-[0.75px] w-[100%] p-3">
          <h1 className="font-inter font-normal text-xl text-center max-lg:text-base">
            {service.title}
          </h1>
        </div>
        <div className="w-full flex flex-col items-center justify-between p-4 r">
          <div>{service.icons}</div>
          <div className="p-2 ">
            <p className="font-inter font-light text-center max-lg:text-sm">
              {service.description}
            </p>
          </div>
        </div>
      </SwiperSlide>
    );
  });

  return (
    <div className="w-full">
      <div className="bg-[#171717] w-full p-10 rounded-b-3xl max-md:rounded-none max-sm:p-6">
        <div className="w-full flex items-center justify-between max-lg:flex-col max-lg:items-start">
          <div>
            <h1 className="text-white text-5xl font-inter font-medium max-sm:text-4xl">
              Let's have a look at <br />
              <span className="text-purple-500">My services</span>
            </h1>
            <p className="text-white font-inter font-semibold mt-3">
              I provide various services as fullstack developer and FPV pilot{" "}
            </p>
          </div>
          <div
            className="flex items-center justify-between p-4 bg-white rounded-2xl hover:cursor-pointer overflow-clip max-lg:mt-4"
            onMouseOver={() => setAppointment(true)}
            onMouseLeave={() => setAppointment(false)}
            onClick={() => onSelectMenu("Contact")}
          >
            <motion.div
              className="size-[10px] rounded-full bg-purple-500 mr-1"
              animate={{
                scale: appointment ? 80 : 1,
              }}
              transition={{
                duration: 0.3,
              }}
            ></motion.div>
            <motion.div className="z-10 ml-1">
              <h1
                className={`font-inter font-semibold text-2xl ${
                  appointment ? "text-white" : "text-purple-500"
                } max-lg:text-lg`}
              >
                Book an appointment
              </h1>
            </motion.div>
          </div>
        </div>

        <div className="flex flex-col justify-around mt-10 max-lg:hidden">
          {displayServices}
        </div>
        <div className="hidden max-lg:flex max-lg:items-center max-lg:justify-center mt-4 w-[100%]">
          <Swiper
            pagination={true}
            modules={[Pagination]}
            className="mySwiper !pb-10"
            centeredSlides={true}
            slidesPerView={1}
          >
            {displaySwiperServices}
          </Swiper>
        </div>
      </div>

      <div className="flex flex-col bg-white w-full">
        <div className="w-full flex flex-col items-end justify-end py-8 px-10 max-sm:px-6 ">
          <h1 className="text-black text-5xl font-inter font-medium text-left max-sm:text-4xl">
            Here I am !<br />
            <span className="text-purple-500 ">My location</span>
          </h1>
          <div className="flex items-center justify-center w-full py-3">
            <div className="border-b-[1px] border-purple-500 w-[40%] max-xl:w-[30%]"></div>
            <div className="flex items-center justify-center mx-2">
              <h1 className="text-4xl text-black text-center font-inter font-medium mr-3 max-2xl:text-2xl max-md:text-[15px] max-sm:text-[15px] max-[430px]:text-[8px]">
                CDG - ARN
              </h1>
            </div>

            <div className="border-b-[1px] border-purple-500 w-[40%] max-xl:w-[30%]"></div>
            <RiPlaneLine className="text-purple-500 rotate-90 text-6xl max-xl:text-3xl" />
          </div>
        </div>

        <div className="w-full relative flex items-center justify-center bg-panorama bg-cover bg-center h-[600px]">
          <div className="absolute w-full h-full top-0 left-0 bg-map bg-cover bg-center gradientImage flex items-end justify-end"></div>
          <div className="size-full flex flex-col items-end backdrop-blur-[5px] px-5 py-10 max-md:items-start">
            {/* <div className="flex items-center justify-center w-full">
              <div className="border-b-[1px] border-white w-[40%] max-xl:w-[35%]"></div>
              <div className="flex items-center mx-2">
                <h1 className="text-4xl text-white font-inter font-bold mr-3 max-2xl:text-2xl max-xl:text-xl max-sm:text-base">
                  ORY - ARN
                </h1>
              </div>

              <div className="border-b-[1px] border-white w-[40%] max-xl:w-[35%]"></div>
              <RiPlaneLine className="text-white rotate-90 text-6xl max-xl:text-3xl" />
            </div> */}

            <h1 className="text-white text-6xl font-inter font-medium uppercase max-sm:text-4xl">
              Stockholm
            </h1>
            <p className="text-white font-inter font-medium text-left mt-5">
              "Aurevoir Paris" - "Hej! Välkommen till Sverige"
            </p>
            <div className="w-[60%] max-md:w-full">
              <p className="text-white text-lg font-inter font-normal pt-5 text-right max-md:text-base max-md:text-left">
                Excited to start this new chapter as a fullstack developer in a
                dynamic and innovative environment. <br />
                I'm eager to tackle new challenges, grow my skills, and
                contribute to exciting projects. With a passion for clean code,
                problem-solving, and creativity, I'm ready to bring my expertise
                in JavaScript, React, and modern web technologies to new
                opportunities. Looking forward to connecting with fellow
                developers, learning from the tech community here, and exploring
                everything Stockholm has to offer! Let's build something
                great together!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
