import React from 'react';
import { Cursor, useTypewriter } from "react-simple-typewriter";
import Media from './Media';

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["DevOps Engineer.", "AWS Cloud Engineer.", "Cloud Architect."],
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
  📈 Aspiring to be counted in the top 1% of Cloud and DevOps engineers globally. 

  🚀 I don’t just deploy infrastructure → I engineer reliability.<br />
  Most systems fail not because of bad code, but because of bad architecture.<br />
  That’s why I focus on:<br />
  🔹 DevOps → Automating deployments, scaling infra without drama<br />
  🔹 SRE (Site Reliability Engineering) → Reducing MTTR, optimizing observability & resilience<br />
  🔹 Cloud Engineering → Optimizing costs while maximizing performance<br />
  🔹 Chaos Engineering → Breaking things on purpose so they don’t break when it matters.<br /><br />
</p>


      </div>
     {/* Media */}
     <Media />
    </div>
  );
}

export default LeftBanner