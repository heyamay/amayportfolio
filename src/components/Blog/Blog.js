import React from "react";
import Title from "../layouts/Title";
import Card from "./Card";

const blogData = [
  {
    id: 1,
    image: require("../../assets/images/blog/blog1.jpg"),  // Replace with actual image paths
    topic: "How to Become a Data Analyst in 2024: 5 Steps to Start Your Career",
    description: "Learn how to become a data analyst and discover everything you need to know about launching your career, including the skills you need and how to learn them.",
    link: "https://drive.google.com/file/d/1bxSptmob6xXpoRYpcRm6aWEgP4TNugr0/view?usp=sharing",
  },
  {
    id: 2,
    image: require("../../assets/images/blog/blog2.png"),  // Replace with actual image paths
    topic: "Why Start a Career as a Data Analyst?",
    description: "Explore the booming data analyst career and the reasons you might consider it, from job demand to salary satisfaction.",
    link: "https://drive.google.com/file/d/1VvYFa7sVkDC4C-cHNlLmCxAMkrZDDc48/view?usp=sharing",
  },
  {
    id: 3,
    image: require("../../assets/images/blog/blog3.jpg"),  // Replace with actual image paths
    topic: "Data Analyst Interview Questions and Answers",
    description: "Get ready for your data analyst interview with these common questions and answers that will help you shine during your interview.",
    link: "https://drive.google.com/file/d/1sOpa03Xl9wkZ8ipipsYuk_fWG3pi0c5w/view?usp=sharing",
  },
];

const Blogs = () => {
  return (
    <section
      id="blog"
      className="w-full py-20 border-b-[1px] border-b-black flex flex-col items-center"
    >
      
      <div className="flex justify-center items-center text-center">
        <Title
          title="Blogs"
          des="My Latest Articles"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        {blogData.map((blog) => (
          <Card
            key={blog.id}
            image={blog.image}
            topic={blog.topic}
            description={blog.description}
            link={blog.link}
          />
        ))}
      </div>
    </section>
  );
};

export default Blogs;
