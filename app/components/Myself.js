// "use client";
// //Extension
// import { useState } from "react";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import Typewriter from "typewriter-effect";
// //Image
// import Me from "../../public/Moi.png";
// //Components
// import AboutMe from "./AboutMe";
// import HireMe from "./HireMe";
// import Header from "./Header";
// //Icons
// import { PiQuotesFill } from "react-icons/pi";
// import { FaGitAlt } from "react-icons/fa";
// import { IoLogoReact } from "react-icons/io5";
// import { IoLogoJavascript } from "react-icons/io5";
// import { FaPython } from "react-icons/fa";
// import { FaNodeJs } from "react-icons/fa";
// import { TfiArrowTopRight } from "react-icons/tfi";
// import { TbDrone } from "react-icons/tb";
// import { FaCode } from "react-icons/fa6";
// import { IoLogoGithub } from "react-icons/io";
// import { FaLinkedinIn } from "react-icons/fa";




// export default function MySelf() {
//   const [active, setActive] = useState("About me");

//   const icons = [
//     {
//       icon: (
//         <FaCode color="black" className="text-3xl max-lg:text-2xl" />
//       ),
//     },
//     {
//       icon: <TbDrone color="black" className="text-3xl max-lg:text-2xl" />,
//     },
//     {
//       icon: <IoLogoGithub className="text-black text-3xl max-lg:text-2xl hover:text-white hover:scale-150 transition" />,
//       link:'https://github.com/OliverMunian'
//     },
//     {
//       icon: <FaLinkedinIn className="text-black text-2xl max-lg:text-2xl hover:text-white hover:scale-150 transition" />,
//       link:'https://www.linkedin.com/in/oliviermalahel/'
//     },
//   ];

//   const buttons = [
//     {
//       title: "About me",
//       link: "",
//       icon: <TfiArrowTopRight color="'white" className="text-2xl ml-2" />,
//     },
//     { title: "Hire me", link: "" },
//   ];

//   const activeIndex = buttons.findIndex((btn) => btn.title === active);

//   const iconsDisplay = icons.map((el, i) => {
//     return (
//       <div
//         key={i}
//         className="bg-purple-500 size-[50px] rounded-full flex items-center justify-center mt-5 max-lg:size-[40px]"
//       >
//         <a href={el.link} target="blank">{el.icon}</a>
//       </div>
//     );
//   });

//   const buttonsDisplay = buttons.map((button, i) => {
//     return (
//       <div key={i} className="w-[50%] z-10">
//         <button
//           className="flex justify-center items-center w-[100%]"
//           onClick={() => setActive(button.title)}
//         >
//           <h1
//             className={`font-inter font-light ${
//               active === button.title ? "font-medium" : ""
//             }`}
//           >
//             {button.title}
//           </h1>
//           {button.icon}
//         </button>
//       </div>
//     );
//   });

//   return (
//     <div className="w-full flex items-center justify-center flex-col">
//       <div className="w-full h-screen flex flex-col items-center justify-between max-lg:h-[100dvh] max-lg:justify-start ">
//         <Header className="z-30" />

//         <div className="w-full h-full relative flex flex-col items-center justify-between ">

//           <div className="w-full pt-2 max-sm:mt-[20%]">
//             <h1 className="text-black text-8xl text-center font-inter font-medium max-lg:text-7xl max-sm:text-[54px] ">
//               I'm <span className="text-purple-500">Olivier Malahel</span>,
//               <br />
//               <Typewriter
//                 options={{
//                   strings: ["Fullstack developer", "FPV Pilot"],
//                   autoStart: true,
//                   pauseFor: 100,
//                   loop: true,
//                   cursor: "_",
//                   color: "#ffffff",
//                   deleteSpeed: "20",
//                 }}
//               />
//             </h1>
//           </div>

//           <div className="relative flex justify-between w-[100%] max-lg:justify-center max-lg:hidden overflow-clip p-5">
//             <div className="w-1/4 flex flex-col justify-center items-center p-4">
//               <div className="w-full flex items-start justify-start">
//                 <PiQuotesFill
//                   color="black"
//                   className="text-3xl scale-x-[-1] "
//                 />
//               </div>
//               <p className="text-black font-inter font-normal text-2xl">
//                 Hi, I'm here to help you to giving <br />
//                 <span className="text-purple-500"> life</span> to all of your
//                 projects !
//               </p>
//               <div className="w-full flex items-start justify-end">
//                 <PiQuotesFill color="black" className="text-3xl" />
//               </div>
//             </div>

//             <div className="w-1/4 flex justify-center items-center flex-col">
//               {iconsDisplay}
//             </div>
//           </div>

//           <div className="top-0 z-20 absolute h-full w-1/2 flex items-end justify-center overflow-hidden max-lg:w-full">
//             <div className="absolute w-[95%] aspect-square bg-purple-500 z-0 rounded-full top-[55%] max-sm:w-[95%]  max-sm:top-[65%]"></div>

//             <Image
//               src={Me}
//               alt="Ma photo de profil"
//               className="z-10 w-[85%] max-sm:w-[100%] max-md:w-[90%] max-[820px]:w-[80%] max-lg:w-[70%] max-xl:w-[85%]"
//             />

//             <div className="absolute flex justify-center items-center h-[100px] w-full z-20 -mt-5">
//               <div
//                 className="relative border-white border-[0.5px] w-[60%] h-[80%] rounded-full backdrop-blur-lg flex items-center justify-around p-4 
//             max-md:w-[80%]"
//               >
//                 <motion.div
//                   className="absolute w-[45%] h-[75%] bg-black rounded-full m-[2.5%]"
//                   initial={false}
//                   animate={{
//                     left: `${activeIndex * 50}%`,
//                   }}
//                   transition={{ type: "spring", stiffness: 300, damping: 30 }}
//                 />
//                 {buttonsDisplay}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {active === "About me" ? <AboutMe /> : <></>}
//       {active === "Hire me" ? <HireMe /> : <></>}
//     </div>
//   );
// }
