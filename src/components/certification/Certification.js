import React from "react";
import Title from "../layouts/Title";

const certificatesData = [
  {
    id: 1,
    name: "AWS - Certified Cloud Practitioner",
    image: require("../../assets/images/certificates/awsccp.jpg"),
    link: "https://drive.google.com/file/d/1S-dGPF7GqTj0qvKnme97NiO3OcVfOF9T/view?usp=sharing",
  },
  {
    id: 2,
    name: "Microsoft Certified: Azure Developer Associate",
    image: require("../../assets/images/certificates/azure.jpg"),
    link: "https://drive.google.com/file/d/1yEl65fI4ZSdIhJu8YkWFldWjdEZ-Ejff/view?usp=sharing",
  },
  {
    id: 3,
    name: "GitHub Foundations Certificate",
    image: require("../../assets/images/certificates/GithubFoundations.jpg"),
    link: "https://drive.google.com/file/d/1WC7PdYohDOqrjwjHVaq85T-qLL61wCUP/view?usp=sharing",
  },
  {
    id: 4,
    name: "Microsoft Data Analysis and Visualization with Power BI",
    image: require("../../assets/images/certificates/microsoft2.png"),
    link: "https://drive.google.com/file/d/1YDDOz8CV_XUYEnWVOH1rh5rEl9PaPStn/view?usp=sharing",
  },
  {
    id: 5,
    name: "SQL (Intermediate) by HackerRank",
    image: require("../../assets/images/certificates/hackerank.png"),
    link: "https://drive.google.com/file/d/1KIb5nhbHxYNrXmR9A7wKY-4tp3ZzAdK1/view?usp=sharing",
  },
  {
    id: 6,
    name: "AWS Academy Cloud Architecting",
    image: require("../../assets/images/certificates/aws.png"),
    link: "https://drive.google.com/file/d/1CcC2gvA24bfJJVnIItc6SLSc8OWG9ezS/view?usp=sharing",
  },
];

const Certification = () => {
  return (
    <section
      id="certification"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      
      <div className="flex justify-center items-center text-center">
        <Title
          title="Certifications"
          des="My Certifications"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        {certificatesData.map((certificate) => (
          <div
            key={certificate.id}
            className="w-full flex flex-col items-center text-center bg-gradient-to-r from-bodyColor to-[#202327] hover:bg-gradient-to-b hover:from-black hover:to-[#1e2024] p-6 rounded-lg shadow-shadowOne group transition-all duration-300"
          >
            <a href={certificate.link} target="_blank" rel="noopener noreferrer">
              <img
                src={certificate.image}
                alt={certificate.name}
                className="w-full h-48 object-cover rounded-lg mb-4 cursor-pointer"
              />
            </a>
            <h3 className="text-lg font-semibold text-gray-300">{certificate.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certification;
