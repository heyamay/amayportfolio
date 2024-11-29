import React from "react";

const Card = ({ image, topic, description, link }) => {
  return (
    <div className="w-full flex flex-col items-center text-center bg-gradient-to-r from-bodyColor to-[#202327] hover:bg-gradient-to-b hover:from-black hover:to-[#1e2024] p-6 rounded-lg shadow-shadowOne group transition-all duration-300">
      <img
        src={image}
        alt={topic}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      <h3 className="text-xl font-semibold text-gray-300">{topic}</h3>
      <p className="text-gray-400 my-4">{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-designColor font-bold hover:underline"
      >
        Read More
      </a>
    </div>
  );
};

export default Card;
