import Image from "next/image";
import AboutMe from "./About";

export default function About() {
  return (
    <div className="flex mt-5 h-full flex-col items-center justify-between overflow-y-auto">
      <AboutMe />
    </div>
  );
}
