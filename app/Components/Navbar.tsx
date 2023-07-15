"use client";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  const toggleMenu = () => {
    setNavbarOpen((prevState) => !prevState);
  };
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between py-3 bg-black mb-3">
        <div className=" w-full  px-4 flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
              href="/"
              onClick={() => setNavbarOpen(false)}
            >
              Jack
            </Link>
            {/* <button
              className="text-white cursor-pointer bg-slate-700 text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars text-white"></i>
            </button> */}
            <div className={"lg:hidden"}>
              <button className="relative group" onClick={toggleMenu}>
                <div
                  className={`relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all  hover: group-focus: duration-200 shadow-md `}
                >
                  <div className="flex flex-col justify-center items-center w-[20px] h-[20px]">
                    <div
                      className={`bg-white h-[2px] w-7 transform transition-all duration-500 ${
                        navbarOpen ? "rotate-45 translate-y-1" : ""
                      }`}
                    ></div>
                    <div
                      className={`bg-white h-[2px] w-7 my-1 rounded transform transition-all duration-500 ${
                        navbarOpen ? "opacity-0" : ""
                      }`}
                    ></div>
                    <div
                      className={`bg-white h-[2px] w-7 transform transition-all duration-500 ${
                        navbarOpen ? "-rotate-45 -translate-y-2" : ""
                      }`}
                    ></div>
                  </div>
                </div>
              </button>
            </div>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="w-full flex flex-col lg:flex-row list-none lg:ml-auto lg:w-fit">
              <li className="nav-item">
                <Link
                  className="py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="/portfolio"
                  onClick={() => setNavbarOpen(false)}
                >
                  <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i>
                  <span className="mx-auto lg:mx-5">My Portfolio</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="/about"
                  onClick={() => setNavbarOpen(false)}
                >
                  <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i>
                  <span className="mx-auto lg:mx-5">About Me</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="/contact"
                  onClick={() => setNavbarOpen(false)}
                >
                  <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i>
                  <span className="mx-auto lg:mx-5">Contacts</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
