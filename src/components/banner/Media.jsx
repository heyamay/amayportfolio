import React from 'react';
import { BsGithub } from "react-icons/bs";
import { FaInstagram, FaLinkedinIn, FaLinux, FaDocker } from "react-icons/fa";
import { SiAmazonaws, SiJenkins, SiMedium } from "react-icons/si";

const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
      {/* Social Media Links */}
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/heyamay/" target="_blank" rel="noopener noreferrer">
            <span className="bannerIcon">
              <FaLinkedinIn />
            </span>
          </a>

          {/* GitHub */}
          <a href="https://github.com/heyamay" target="_blank" rel="noopener noreferrer">
            <span className="bannerIcon">
              <BsGithub />
            </span>
          </a>

          {/* Medium */}
          <a href="https://medium.com/@amayjaiswal" target="_blank" rel="noopener noreferrer">
            <span className="bannerIcon">
              <SiMedium />
            </span>
          </a>

          {/* Instagram */}
          <a href="https://www.instagram.com/hey.amay" target="_blank" rel="noopener noreferrer">
            <span className="bannerIcon">
              <FaInstagram />
            </span>
          </a>
        </div>
      </div>

      {/* Best Skills Section */}
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">Best Skills</h2>
        <div className="flex gap-4">
          {/* AWS */}
          <span className="bannerIcon">
            <SiAmazonaws title="AWS Cloud" />
          </span>

          {/* Linux */}
          <span className="bannerIcon">
            <FaLinux title="Linux" />
          </span>

          {/* Docker */}
          <span className="bannerIcon">
            <FaDocker title="Docker" />
          </span>

          {/* Jenkins */}
          <span className="bannerIcon">
            <SiJenkins title="Jenkins" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Media;
