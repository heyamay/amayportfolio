import React from 'react';
import { BsGithub } from "react-icons/bs";
import { FaHackerrank, FaInstagram, FaLinkedinIn, FaDatabase, FaPython } from "react-icons/fa";
import { SiPowerbi } from "react-icons/si";
import { AiOutlineFileExcel } from "react-icons/ai";

const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
      {/* Social Media Links */}
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
        <a href="https://www.linkedin.com/in/heyamay/" target="_blank" rel="noopener noreferrer">
            <span className="bannerIcon">
              <FaLinkedinIn />
            </span>
          </a>
          <a href="https://github.com/heyamay" target="_blank" rel="noopener noreferrer">
            <span className="bannerIcon">
              <BsGithub />
            </span>
          </a>
          <a href="https://medium.com/@amayjaiswal" target="_blank" rel="noopener noreferrer">
            <span className="bannerIcon">
              <FaHackerrank />
            </span>
          </a>
          
          <a href="https://www.instagram.com/hey.amay" target="_blank" rel="noopener noreferrer">
            <span className="bannerIcon">
              <FaInstagram />
            </span>
          </a>
        </div>
      </div>

      {/* Best Skills Section */}
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">Best Skill On</h2>
        <div className="flex gap-4">
          {/* AWS */}
          <span className="bannerIcon">
            <FaDatabase title="AWS" />
          </span>

          {/* LINUX */}
          <span className="bannerIcon">
            <FaPython title="LINUX" />
          </span>

          {/* Docker */}
          <span className="bannerIcon">
            <SiPowerbi title="Docker" />
          </span>

          {/* Jenkins */}
          <span className="bannerIcon">
            <AiOutlineFileExcel title="Jenkins" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Media;
