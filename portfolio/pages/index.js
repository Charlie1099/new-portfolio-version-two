import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai";
import { GoMarkGithub } from "react-icons/go";
import Image from "next/image";
import CodingQuiz from "../src/image/CodingQuiz.png";
import DayScheduler from "../src/image/DayScheduler.png";
import EmployeeTracker from "../src/image/EmployeeTracker.png";
import NodeGeneratedReadeMe from "../src/image/NodeGeneratedReadeMe.png";
import TeamProfileGenerator from "../src/image/TeamProfileGenerator.png";
import WeatherAPI from "../src/image/WeatherAPI.png";
import GroupProject from "../src/image/GroupProject.png";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false)
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Cameron Charlesworth Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white  md:px-20 lg:px-10 dark:bg-gray-900" >
        <section className="  min-h-screen">
          <nav className="py-10 md-12 flex justify-between">
            <h1 className="text-xl">Cameron Charlesworth</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className="cursor-pointer text-2xl" />
              </li>
              <li className="px-5">About Me</li>
              <li className="pr-5">Portfolio</li>
              <li>Contact</li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>

          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
              Cameron Charlesworth
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl">Frontend Devloper</h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl">
              happy to see you lets see if we can work to gether
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-10 py-3 text-gray-600">
            <AiFillTwitterCircle />
            <AiFillLinkedin />
            <GoMarkGithub />
          </div>
          <div className="">{/* put image here mayby */}</div>
        </section>

        <section>
          <div>
            <h3 className="text-3xl py-1 md:text-3xl text-center">About Me</h3>
            <p className="text-md py-2 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto">
              Hi, my name is Cameron and I am aiming to become a Junior Software
              Developer. I have recently completed the Utah Coding Bootcamp
              where I developed <span className="text-teal-500">skills</span> in
              a variety of developer tools such as JavaScript, Node.js, SQL,
              Express.js, MVC, OOR, and PWA. I also had the opportunity to be a
              part of three class projects where we would work with 4 people and
              had to communicate, deligate the work load and make GitHub issues
              for the project for the group and pesent the project to the
              teacher, teacher assistants and cohort. I loved the challenge of
              learning so much over the six months that I was at the course
              learing the <span className="text-teal-500">MERN</span> stack. I
              look forward to learing more as my journey on this exciting creer
              path has just started.
            </p>
          </div>
        </section>

        <section>
          <div className="py-5">
            <h3 className="text-3xl py-1 text-center">Portfolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 text-center">
              Current finished projects.
            </p>
            <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
              <div className="text-center shadow-xl px-2 rounded-xl basis-1/3 flex-1">
                <Image src={CodingQuiz} width={"100%"} height={"100%"} className="rounded-lg" layout={"responsive"}/>
              </div>
              <div className="text-center shadow-xl px-2 rounded-xl basis-1/3 flex-1">
                <Image src={DayScheduler} width={"100%"} height={"100%"} className="rounded-lg" layout={"responsive"}/>
              </div>
              <div className="text-center shadow-xl px-2 rounded-xl basis-1/3 flex-1">
                <Image src={WeatherAPI} width={"100%"} height={"100%"} className="rounded-lg" layout={"responsive"}/>
              </div>
              <div className="text-center shadow-xl px-2 rounded-xl basis-1/3 flex-1">
                <Image src={EmployeeTracker} width={"100%"} height={"100%"} className="rounded-lg" layout={"responsive"}/>
              </div>
              <div className="text-center shadow-xl px-2 rounded-xl basis-1/3 flex-1">
                <Image src={NodeGeneratedReadeMe} width={"100%"} height={"100%"} className="rounded-lg" layout={"responsive"} />
              </div>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 text-center">Contact</h3>
          </div>
        </section>
      </main>
    </div>
  );
}
