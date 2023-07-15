"use client";
import Link from "next/link";
import React, { useState } from "react";

export default function AboutMe() {
  return (
    <div className="w-full flex flex-col h-screen p-5 pb-10 lg:w-3/5 mx-auto">
      <h2 className="text-5xl mb-5">About Me</h2>
      <div className="w-full border-b border-gray-600 lg:w-2/3"></div>
      <div className="w-full flex flex-col mt-12 mb-7 sm:flex-row h-fit ">
        <div className="sm:w-5/12 mb-7 lg:mb-0">
          <div className="text-3xl">a bit about myself</div>
        </div>
        <div className="sm:flex-1">
          <div>
            Welcome to my domain! I&apos;m a passionate software engineer
            dedicated to crafting effective and efficient web and mobile
            applications. With expertise in JavaScript, Node.js, React, and
            Flutter, I seamlessly switch between frontend and backend
            development to create seamless user experiences and tackle complex
            business logic. With solid work experience in Blockchain and
            Insurance product development, I bring a specialized understanding
            of these domains to deliver innovative solutions. I&apos;m
            constantly expanding my skills and knowledge, currently exploring
            the cloud and working towards an AWS Solutions Architect
            certification. Join me on this exciting digital journey, explore my
            projects, and let&apos;s collaborate to create something
            extraordinary together!
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col mt-12 mb-7 sm:flex-row h-fit ">
        <div className="sm:w-5/12 mb-7 lg:mb-0">
          <div className="text-3xl">Skills</div>
        </div>
        <div className="sm:flex-1">
          <ul className="list-disc list-inside">
            <li>
              Languages:{" "}
              <span className="text-sm">JavaScript, TypeScript, Dart</span>
            </li>
            <li>
              Web Dev:{" "}
              <span className="text-sm">HTML, Tailwind, React.js, Next.js</span>
            </li>
            <li>
              Mobile Dev: <span className="text-sm">Flutter, PWAs</span>
            </li>
            <li>
              Backend Dev:{" "}
              <span className="text-sm">Node, Express, GraphQL</span>
            </li>
            <li>
              Databases: <span className="text-sm">MongoDB, Firebase, SQL</span>
            </li>
            <li>
              Cloud:{" "}
              <span className="text-sm">GCP, currently learning AWS</span>
            </li>
            <li>
              Version Control: <span className="text-sm">Github, GitLab</span>
            </li>
            <li>
              Other:{" "}
              <span className="text-sm">TDD, Terminal, Docker, RabbitMQ</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full flex flex-col mt-12 mb-7 sm:flex-row h-fit ">
        <div className="sm:w-5/12 mb-7 lg:mb-0">
          <div className="text-3xl">Services</div>
        </div>
        <div className="sm:flex-1">
          <div className="mb-5">
            <h2 className="text-2xl mb-2">Web Developement</h2>
            <div className="w-full border-b-2 border-white"></div>
            <div className=" mt-2">
              I specialize in web development, creating interactive and
              user-friendly websites that leave a lasting impression. Leveraging
              my expertise in technologies such as JavaScript, Node.js, React,
              and responsive design principles, I build captivating web
              experiences. From crafting engaging user interfaces to
              implementing robust backend functionalities, I strive to deliver
              high-quality web solutions that meet the unique needs of each
              client.
            </div>
          </div>
          <div className="mb-5">
            <h2 className="text-2xl mb-2">Mobile Apps</h2>
            <div className="w-full border-b-2 border-white"></div>
            <div className=" mt-2">
              With a passion for mobile app development, I bring ideas to life
              by creating captivating and functional applications. Using tools
              like Flutter and Dart, I develop cross-platform mobile apps that
              work seamlessly on iOS and Android devices. Whether it&apos;s
              building user-friendly interfaces or integrating powerful
              features, my focus is on delivering a smooth and engaging mobile
              experience that resonates with users.
            </div>
          </div>
          <div className="mb-5">
            <h2 className="text-2xl mb-2">Backend & API Development</h2>
            <div className="w-full border-b-2 border-white"></div>
            <div className=" mt-2">
              I excel in developing robust backends and powerful APIs that serve
              as the backbone of web and mobile applications. Leveraging my
              expertise in technologies like Node.js, Express.js, and database
              management systems, I design and implement secure and scalable
              server-side logic. From creating RESTful APIs for seamless
              communication between frontends and backends to integrating with
              third-party services, I ensure efficient data management and
              smooth functionality, enabling applications to perform at their
              best.
            </div>
          </div>
          <div className="mb-5">
            <h2 className="text-2xl mb-2">Consultancy and Maintenance</h2>
            <div className="w-full border-b-2 border-white"></div>
            <div className=" mt-2">
              With a wealth of experience as a software engineer, I offer
              consultancy services to guide businesses through the dynamic tech
              landscape. From technology stack selection to system architecture,
              I provide tailored recommendations to optimize digital
              initiatives. Additionally, I provide comprehensive maintenance for
              your digital assets, ensuring their reliability and security. With
              a focus on your goals and ongoing support, I help businesses
              thrive in the digital realm.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
