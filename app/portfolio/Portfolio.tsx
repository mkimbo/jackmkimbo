"use client";
import React from "react";
import { AiFillGithub, AiFillEye } from "react-icons/ai";

export default function MyPortfolio() {
  return (
    <div className="w-full flex flex-col h-screen p-5 pb-10 lg:w-3/5 mx-auto">
      <h2 className="text-5xl mb-5">My Work</h2>
      <div className="w-full border-b border-gray-600 mb-10 lg:w-2/3"></div>
      <div className="w-full h-fit flex flex-col justify-between sm:flex-row">
        <div className="max-w-sm p-6 my-2 bg-white border border-gray-200 rounded-lg lg:w-[300px] shadow md:m-5 dark:bg-gray-800 dark:border-gray-700">
          <div>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {" "}
              This site you are on
            </h5>
          </div>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            My personal portfolio website.I used Next.js with the new Server
            Actions for the contact form and Tailwind CSS for styling. It is
            hosted on vercel. I plan to add more Next js features as I learn
            them.
          </p>
          <div className="w-full flex flex-row justify-between">
            <a
              href="https://github.com/mkimbo/jackmkimbo"
              target="_blank"
              aria-label="Github Link"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white  rounded-lg hover:bg-white hover:text-black "
            >
              Code
              <AiFillGithub className="w-6 h-6 ml-2" />
            </a>
            {/* <a
              href="#"
              target="_blank"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white  rounded-lg hover:bg-white hover:text-black "
            >
              View
              <AiFillEye className="w-6 h-6 ml-2" />
            </a> */}
          </div>
        </div>
        <div className="max-w-sm p-6 my-2 bg-white border border-gray-200 rounded-lg lg:w-[300px] shadow md:m-5 dark:bg-gray-800 dark:border-gray-700">
          <div>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {" "}
              BN Social Platform
            </h5>
          </div>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            A MERN Stack social platform I took part in building as part of my
            work experience at BitNorm, a Cypto/Blockchain Startup. We also used
            microservices and RabbbitMQ for the message broker.
          </p>
          <div className="w-full flex flex-row justify-between">
            {/* <a
              href="#"
              target="_blank"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white  rounded-lg hover:bg-white hover:text-black "
            >
              Code
              <AiFillGithub className="w-6 h-6 ml-2" />
            </a> */}
            <a
              href="https://bitnorm.com/"
              target="_blank"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white  rounded-lg hover:bg-white hover:text-black "
            >
              View
              <AiFillEye className="w-6 h-6 ml-2" />
            </a>
          </div>
        </div>
        <div className="max-w-sm p-6  my-2 bg-white border border-gray-200 rounded-lg lg:w-[300px] shadow md:m-5 dark:bg-gray-800 dark:border-gray-700">
          <div>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {" "}
              Missing Link
            </h5>
          </div>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            An empowering community-driven initiative that encourages
            individuals to take initiative and be responsible, fostering a
            heightened sense of awareness and connection within their
            communities.
          </p>
          <div className="w-full flex flex-row justify-between">
            <a
              href="https://github.com/mkimbo/amber-alerts"
              target="_blank"
              aria-label="Github Link"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white  rounded-lg hover:bg-white hover:text-black "
            >
              Code
              <AiFillGithub className="w-6 h-6 ml-2" />
            </a>
            <a
              href="#"
              target="_blank"
              aria-label="Live Site Link"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white  rounded-lg hover:bg-white hover:text-black "
            >
              View
              <AiFillEye className="w-6 h-6 ml-2" />
            </a>
          </div>
        </div>
      </div>
      <div className="w-full h-fit flex flex-col justify-between sm:flex-row flex-wrap md:flex-nowrap">
        <div className="max-w-sm p-6  my-2 bg-white border border-gray-200 rounded-lg lg:w-[300px] shadow md:m-5 dark:bg-gray-800 dark:border-gray-700">
          <div>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {" "}
              MERN App
            </h5>
          </div>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            A simple MERN Stack web application I used to practice & learn. It
            has role-based authentication using JWT & HttpOnly Cookies, CRUD
            operations and other basic features.
          </p>
          <div className="w-full flex flex-row justify-between">
            <a
              href="https://github.com/mkimbo/mern-project-client"
              target="_blank"
              aria-label="Github Link"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white  rounded-lg hover:bg-white hover:text-black "
            >
              Code
              <AiFillGithub className="w-6 h-6 ml-2" />
            </a>
            <a
              href="https://mern-mini-social.netlify.app/"
              target="_blank"
              aria-label="Live Site Link"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white  rounded-lg hover:bg-white hover:text-black "
            >
              View
              <AiFillEye className="w-6 h-6 ml-2" />
            </a>
          </div>
        </div>
        <div className="max-w-sm p-6  my-2 bg-white border border-gray-200 rounded-lg lg:w-[300px] shadow md:m-5 dark:bg-gray-800 dark:border-gray-700">
          <div>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {" "}
              Gatsby Blog
            </h5>
          </div>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            This is a JAMStack blog application that is blazing fast and SEO
            ready. It is made with React/Gatsby and a Firebase database. It is
            also a PWA and comes ready with an easy to use CMS.
          </p>
          <div className="w-full flex flex-row justify-between">
            <a
              href="https://github.com/mkimbo/hyblog-final"
              target="_blank"
              aria-label="Github Link"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white  rounded-lg hover:bg-white hover:text-black "
            >
              Code
              <AiFillGithub className="w-6 h-6 ml-2" />
            </a>
            <a
              href="https://hyblog.netlify.app/"
              target="_blank"
              aria-label="Live Site Link"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white  rounded-lg hover:bg-white hover:text-black "
            >
              View
              <AiFillEye className="w-6 h-6 ml-2" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
