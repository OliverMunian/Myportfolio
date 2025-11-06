//Icons
import { IoMdCloudDownload } from "react-icons/io";
//Components
import Portfolio from "./Portfolio";
import Skills from "./Skills";
import Languages from "./Languages";
//Assets

export default function HireMe() {
  const timeLineEducation = [
    // {
    //   title: "Swedish Learning",
    //   place: "SFI School",
    //   town: "Stockholm",
    //   date: "2025",
    //   description: (
    //     <>
    //       Learning how to introduce myself in Swedish <br />
    //       Learning the fundamental of the language <br />
    //       Knowledge of the origin
    //     </>
    //   ),
    // },
    {
      title: "Developer Fullstack",
      place: "La Capsule",
      town: "Paris",
      date: "2023",
      description: (
        <>
          Learning GIT, Javascript, HTML & CSS ,API, NodeJS, Express, React,{" "}
          <br />
          React Native, TypeScript... Practicing with Hackathon building
          projects
        </>
      ),
    },
    {
      title: "Ambulance",
      place: "Theodore Simon Institute",
      town: "Neuilly-sur-Marne",
      date: "2018",
      description: (
        <>
          Learning about main diseases and symptoms <br />
          Carrying out a collection of clinical data and implementing
          appropriate care <br />
          Transporting the patient in compliance with traffic and road safety
          rules <br />
          Equipment maintenance
        </>
      ),
    },
    {
      title: "Technical sales representative",
      place: "François Mansart Highschool",
      town: "Saint-Maur-des-fossés",
      date: "2012 - 2014",
      description: (
        <>
          Master a specific technical field <br />
          Develop sales and negotiation skills <br />
          Manage B2B and B2C customer relationships <br />
          Implement an appropriate sales strategy <br />
          Ensure customer follow-up and effective after-sales service
        </>
      ),
    },
    {
      title: "Mechanical Engineering",
      place: "François Mansart Highschool",
      town: "Saint-Maur-des-fossés",
      date: "2010 - 2012",
      description: (
        <>
          Design and Industrial Drawing <br />
          Materials and Manufacturing Processes <br />
          General Mechanics and Resistance of Materials <br />
          Automation and Control of Systems <br />
          Energy and Power Transmission <br />
          Maintenance and Production Management <br />
        </>
      ),
    },
  ];

  const timeLineWorkExp = [
    {
      company: "Ambulances du Centre",
      date: "2022 - 2024",
      postion: "Ambulance",
      description: (
        <>
          Emergency call center - SAMU 15 <br />
          Transport of sick, injured or patient <br />
          Complete disinfection of the medical vehicle and equipment
        </>
      ),
    },
    {
      company: "Ambulances Joncs-Marins/Dalayrac",
      date: "2019 - 2021",
      postion: "Ambulance",
      description: (
        <>
          First aid care Nurse/doctor transmissions Monitoring sick patients
          during transport
        </>
      ),
    },
  ];

  const displayEducationPlace = timeLineEducation.map((event, i) => {
    return (
      <div
        key={i}
        className="flex items-start justify-between w-full px-4 max-sm:px-0"
      >
        <div className="w-[35%] max-sm:hidden">
          <h1 className="font-inter font font-semibold text-3xl text-black">
            {event.place}
          </h1>
          <p className="text-gray-400">
            {event.town}, {event.date}
          </p>
        </div>
        <div className="flex justify-start items-stretch w-[65%] max-sm:flex-row-reverse max-sm:w-full max-sm:justify-between">
          <div className="flex flex-col items-center ml-[20%] mr-[10%]  max-sm:mr-0 ">
            <div className="flex items-center justify-center border-2 border-dashed border-black rounded-full p-2 w-[60px] h-[60px]">
              <div
                className={`size-full rounded-full ${
                  i % 2 != 0 ? "bg-purple-500" : "bg-black"
                }`}
              ></div>
            </div>
            {i !== timeLineEducation.length - 1 && (
              <div className="flex-1 w-[2px] border-black border-[1px] border-dashed"></div>
            )}
          </div>

          <div className="flex flex-col max-sm:pt-5">
            <h1 className="font-inter font font-semibold text-3xl text-black max-sm:text-xl">
              {event.title}
            </h1>
            <p className="text-gray-400 max-sm:text-base">{event.description}</p>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="flex flex-col justify-center items-center border-t-[0.75px] border-black w-full">
      {/* <div>
        <h1 className="font-inter font-semibold text-black text-5xl">
          My <span className="text-purple-500">Work Experience</span>
        </h1>
      </div> */}

      <div className="w-full flex-col flex items-center justify-center p-5">
        <div className="flex flex-col justify-around">
          <h1 className="font-inter font-semibold text-black text-5xl">
            My <span className="text-purple-500">Education</span>
          </h1>
          <div className="flex flex-col w-full items-center justify-center">
            <h1 className="text-black text-xl font-inter font-light">
              Download my CV
            </h1>
            <a href="Fullstack_EN.pdf" download="Fullstack_EN.pdf">
              <IoMdCloudDownload className="text-5xl hover:text-black text-[#9d59ef] transition" />
            </a>
          </div>
        </div>
        <div className="w-full h-full mt-5">
          {displayEducationPlace}
        </div>
      </div>
      <Portfolio />
      <Skills/>
      <Languages/>
    </div>
  );
}
