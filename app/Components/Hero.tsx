"use client";
import Link from "next/link";
import React, { useState } from "react";
import Typewriter from "typewriter-effect";

export default function Hero() {
  return (
    <div className="w-full flex flex-col-reverse sm:flex-row h-screen">
      <div className="flex-1 bg-transparent my-auto pl-5">
        <div className="mb-2 text-3xl mt-10 lg:mt-0 lg:w-4/5 mx-auto">
          I'm Jack Mkimbo
        </div>
        <div className=" w-4/5 text-lg text-gray-400 lg:mx-auto mb-7">
          <Typewriter
            options={{
              strings: [
                "A Software Engineer.",
                "Passionate and experienced.",
                "Check out my work.",
              ],

              autoStart: true,
              loop: true,
              deleteSpeed: 10,
              cursor: "_<",
            }}
          />
        </div>
        <div className="text-lg text-gray-400 lg:w-4/5 mx-auto pr-2">
          From conceptualization to execution, I specialize in crafting bespoke
          web and mobile solutions that captivate users and deliver tangible
          results.
        </div>
        <div className="flex flex-row lg:w-4/5 mx-auto my-5">
          <Link
            href="/about"
            className="w-[130px] h-[36px] bg-white mr-5 text-black text-center text-lg pt-1"
          >
            What I Do
          </Link>
          <Link
            href="/contact"
            className="w-[130px] h-[36px] text-center text-lg pt-1 border-2 border-white"
          >
            Contact Me
          </Link>
        </div>
      </div>

      <div
        className="flex-1 bg-cover bg-center "
        style={{
          backgroundImage: "url('/jack.png')",
        }}
      ></div>
    </div>
  );
}
