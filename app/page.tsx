import Image from "next/image";
import Hero from "./Components/Hero";

export default function Home() {
  return (
    <div className="flex mt-5 h-full flex-col items-center justify-between overflow-y-auto">
      <Hero />
    </div>
  );
}
