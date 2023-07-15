"use client";
import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillEye } from "react-icons/ai";

export default function MyPortfolio() {
  return (
    <div className="w-full flex flex-col h-screen p-5 pb-10 lg:w-3/5 mx-auto">
      <h2 className="text-5xl mb-5">My Work</h2>
      <div className="w-full border-b border-gray-600 mb-10 lg:w-2/3"></div>
      <div className="w-full h-fit flex flex-col justify-between sm:flex-row flex-wrap md:flex-nowrap">
        <div className="max-w-sm my-2 lg:w-[330px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 lg:m-5">
          <a href="#">
            <img
              className="rounded-t-lg w-full max-h-56"
              src="/personal.png"
              alt=""
            />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                This site you are on
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              My personal portfolio website.I used Next.js v13+ and Tailwind CSS
              and hosted it on vercel.
            </p>
            <div className="w-full flex flex-row justify-between">
              <a
                href="https://github.com/mkimbo/jackmkimbo"
                target="_blank"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white  rounded-lg hover:bg-white hover:text-black"
              >
                Code
                <AiFillGithub className="w-6 h-6 ml-2" />
              </a>
              {/* <a
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white  rounded-lg hover:bg-white hover:text-black 0"
              >
                View
                <AiFillEye className="w-6 h-6 ml-2" />
              </a> */}
            </div>
          </div>
        </div>
        <div className="max-w-sm my-2 lg:w-[330px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 lg:m-5">
          <a href="#">
            <img
              className="rounded-t-lg w-full h-56"
              src="/bitnorm.png"
              alt=""
            />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                BN Social Platform
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              A Fully functional social platform I took part in building as part
              of my work experience at BitNorm, a Cypto/Blockchain Startup.
            </p>
            <div className="w-full flex flex-row justify-between">
              {/* <a
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white  rounded-lg hover:bg-white hover:text-black "
              >
                Code
                <AiFillGithub className="w-6 h-6 ml-2" />
              </a> */}
              <a
                href="https://bitnorm.com/"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white  rounded-lg hover:bg-white hover:text-black"
              >
                View
                <AiFillEye className="w-6 h-6 ml-2" />
              </a>
            </div>
          </div>
        </div>
        <div className="max-w-sm my-2 lg:w-[330px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 lg:m-5">
          <a href="#">
            <img
              className="rounded-t-lg w-full h-56"
              src="/missing-link.png"
              alt=""
            />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Missing Link
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              A transformative community-driven initiative connecting
              individuals & empowering collaboration.
            </p>
            <div className="w-full flex flex-row justify-between">
              <a
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white  rounded-lg hover:bg-white hover:text-black "
              >
                Code
                <AiFillGithub className="w-6 h-6 ml-2" />
              </a>
              <a
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white  rounded-lg hover:bg-white hover:text-black "
              >
                View
                <AiFillEye className="w-6 h-6 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-fit flex flex-col justify-between sm:flex-row flex-wrap md:flex-nowrap">
        <div className="max-w-sm my-2 lg:w-[330px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 lg:m-5">
          <a href="#">
            <img
              className="rounded-t-lg w-full max-h-56"
              src="/mern.png"
              alt=""
            />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                MERN App
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              A simple MERN Stack web application I used to practice & learn. It
              has role-based authentication, CRUD operations and other basic
              features.
            </p>
            <div className="w-full flex flex-row justify-between">
              <a
                href="https://github.com/mkimbo/mern-project-client"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white  rounded-lg hover:bg-white hover:text-black"
              >
                Code
                <AiFillGithub className="w-6 h-6 ml-2" />
              </a>
              <a
                href="https://mern-mini-social.netlify.app/"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white  rounded-lg hover:bg-white hover:text-black 0"
              >
                View
                <AiFillEye className="w-6 h-6 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
