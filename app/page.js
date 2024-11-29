import Image from "next/image";
import Video from "./components/Video";
import AboutMe from "./components/AboutMe";

export default function Home() {
  return (
    <div className="">
      <Video/>
      <AboutMe/>
    </div>
  );
}
