import React from "react";
import Title from "../layouts/Title";
import Card from "./Card";

const blogData = [
  {
    id: 1,
    image: require("../../assets/images/blog/blog1.jpg"),  // Replace with actual image paths
    topic: "DevOps CI/CD Project: Jenkins CI/CD Pipeline on AWS with ECR, Docker, Prometheus, Grafana & Alertmanager",
    description: "Built a Jenkins CI/CD pipeline on AWS using ECR, Docker, Prometheus, Grafana, and Alertmanager for automated deployment and monitoring",
    link: "https://medium.com/@amayjaiswal/devops-ci-cd-project-jenkins-ci-cd-pipeline-on-aws-with-ecr-docker-prometheus-grafana-bd0f8c87e982",
  },
  {
    id: 2,
    image: require("../../assets/images/blog/blog2.png"),  // Replace with actual image paths
    topic: "Why Start a Career as a Data Analyst?",
    description: "Explore the booming data analyst career and the reasons you might consider it, from job demand to salary satisfaction.",
    link: "https://medium.com/@amayjaiswal/why-start-a-career-as-a-data-analyst-f5e102317ea8",
  },
  {
    id: 3,
    image: require("../../assets/images/blog/blog3.jpeg"),  // Replace with actual image paths
    topic: "The Future of Data Analytics: Trends to Watch in 2025",
    description: "Learn the biggest data and analytics trends to watch and prepare your business for in 2025",
    link: "https://medium.com/@amayjaiswal/the-future-of-data-analytics-trends-to-watch-in-2025-27eda8725c64",
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
