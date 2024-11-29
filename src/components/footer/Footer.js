import React from "react";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import profileImage from "../../assets/images/logo.png"; // Replace this with the actual path to Amay's profile image.
import { navLinksdata } from "../../constants"; // Ensure this file path is correct.

const Footer = () => {
  return (
    <div className="w-full py-10 bg-[#141518] text-white flex flex-col md:flex-row justify-between items-center gap-8 px-6 md:px-16">
      {/* Profile Section */}
      <div className="flex flex-col items-center md:items-start">
        <img
          className="w-28 h-28 rounded-full border-2 border-designColor object-cover mb-4"
          src={profileImage}
          alt="Amay Jaiswal"
        />
        <h3 className="text-lg font-bold">Amay Jaiswal</h3>
        {/* <p className="text-gray-400 text-sm text-center md:text-left">
          Data and Business Analyst
        </p> */}
      </div>

      {/* Quick Links */}
      <div className="flex flex-col items-center md:items-start">
        <h3 className="text-xl uppercase text-designColor tracking-wider mb-4">
          Quick Links
        </h3>
        <ul className="flex flex-col gap-3 font-medium">
          {navLinksdata.map((link) => (
            <li key={link._id}>
              <a
                href={`#${link.link}`}
                className="text-gray-400 hover:text-designColor duration-300 cursor-pointer"
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Social Media Links */}
      <div className="flex flex-col items-center md:items-end">
        <h3 className="text-xl uppercase text-designColor tracking-wider mb-4">
          Follow Me
        </h3>
        <div className="flex gap-6">
        <a
            href="https://www.linkedin.com/in/heyamay/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-designColor duration-300 text-2xl"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://github.com/amayjaiswal"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-designColor duration-300 text-2xl"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.instagram.com/hey.amay/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-designColor duration-300 text-2xl"
          >
            <FaInstagram />
          </a>
          
        </div>
      </div>
    </div>
  );
};

export default Footer;
