import React from 'react';
import { Cursor, useTypewriter } from "react-simple-typewriter";
import Media from './Media';

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["Data Analyst.", " Business Analyst.", "PowerBI Developer."],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Amay Jaiswal</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
        I've always been fascinated by the power of data - the way it can reveal hidden patterns,
uncover valuable insights, and ultimately drive smarter business decisions. As a B.Tech
2025 graduate, I've had the opportunity to put this passion into practice through various
projects. Skilled in SQL, Python, Power BI, and Tableau, I leverage data visualization and
analysis to answer key business questions
        </p>
      </div>
     {/* Media */}
     <Media />
    </div>
  );
}

export default LeftBanner