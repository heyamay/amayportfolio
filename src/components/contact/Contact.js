import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full py-20 bg-[#141518] text-white flex flex-col items-center"
    >
      <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
      <p className="text-gray-400 mb-10">Below are the details to reach out to me!</p>
      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
        {/* LinkedIn */}
        <div className="flex flex-col items-center">
          <a
            href="https://www.linkedin.com/in/heyamay/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center text-gray-400 hover:text-white"
          >
            <FaLinkedin className="text-4xl mb-2" />
            <p className="uppercase tracking-wide">LinkedIn</p>
            <span>Amay</span>
          </a>
        </div>
        {/* Contact Number */}
        <div className="flex flex-col items-center">
          <a
            href="tel:+918824055409"
            className="flex flex-col items-center text-gray-400 hover:text-white"
          >
            <FaPhoneAlt className="text-4xl mb-2" />
            <p className="uppercase tracking-wide">Phone</p>
            <span>+91 8824055409</span>
          </a>
        </div>
        {/* Email Address */}
        <div className="flex flex-col items-center">
          <a
            href="mailto:amayjaiswal@gmail.com"
            className="flex flex-col items-center text-gray-400 hover:text-white"
          >
            <FaEnvelope className="text-4xl mb-2" />
            <p className="uppercase tracking-wide">Gmail</p>
            <span>amayjaiswal@gmail.com</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
