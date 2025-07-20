import { motion } from "framer-motion";
import React from "react";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col items-center gap-10 py-12 px-6 sm:px-12"
    >
      {/* Heading Section */}
      <div className="w-full max-w-3xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold">Experience</h2>
      </div>

      {/* Content Section */}
      <div className="w-full max-w-3xl">
        <div className="mt-6 w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">

        <ResumeCard
            title="DevOps and Cloud Engineer"
            subTitle="BUSINESSNEXT (July 2025)- Noida"
            result=""
            des={
              <>
                ● Deployed, managed, and optimized Kubernetes clusters (EKS self-managed) for scalable microservices;
 implemented Helm for versioned deployments and configured liveness/readiness probes, secrets management, and
 HPA. <br />
                ● Performed cluster troubleshooting, log analysis, and rolling updates.<br />
                
              </>
            }
          />
          <ResumeCard
            title="DevOps Engineer"
            subTitle="Perception & Quant Research (April 2025 - July 2025) - Remote"
            result=""
            des={
              <>
                ● Built and maintained Docker containerized apps using Docker Compose for multi-container setups and optimized Dockerfiles to reduce build time and environment issues.<br />
                ● Implemented real-time centralized log monitoring using Promtail, Loki, and Grafana across multiple Linux servers, enabling live log streaming, filtering, and visualization from remote nodes in a unified dashboard.
<br />
                ● Designed and implemented Bitbucket CI/CD pipelines for various projects, integrating DevSecOps practices for secure and automated deployments.<br />
              </>
            }
          />
          <ResumeCard
            title="AWS Cloud & DevOps Intern"
            subTitle="WebKalakaar Software Private Limited (October 2024 - March 2025) - Jaipur"
            result=""
            des={
              <>
                ● Worked on the VirtualStation.io project, assisting in designing and deploying AWS infrastructure using EC2, S3,
                Lambda, RDS, and DynamoDB, ensuring scalable solutions that enhanced application performance by 25%.<br />
                ● Contributed to the development of CI/CD pipelines using Jenkins, reducing deployment time by 40%.<br />
                ● Collaborated with senior developers to integrate AWS services (CloudFront, IAM, API Gateway) and REST
                APIs into existing systems, improving API response efficiency by 35%<br />
              </>
            }
          />
          <ResumeCard
            title="Java Development Intern"
            subTitle="CodeClause (May 2024 - June 2024) - NOIDA"
            result=""
            des={
              <>
                ● Developed a console-based application for viewing movies, selecting seats, and booking tickets using Java and OOP.<br />
                ● Designed a user-friendly interface to streamline the ticket-booking process, ensuring ease of use for end-users.<br />
                ● View Project:{" "}
                <a
                  href="https://github.com/heyamay/Java-Application-for-Movie-Ticket-Booking"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline"
                >
                  Java Application for Movie Ticket Booking
                </a>
              </>
            }
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
