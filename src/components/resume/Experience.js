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
            title="System Engineer"
            subTitle="Infosys Limited (Starting Jan 2025)- Mysuru"
            result=""
            des={
              <>
                ● I will undergo extensive training at Infosys's Mysore campus.<br />
                ● India's largest IT training centre, designed to prepare freshers for advanced technical, soft skills, and domain-specific requirements.<br />
                
              </>
            }
          />

          <ResumeCard
            title="Junior Data Analyst Intern"
            subTitle="WebKalakaar Software Private Limited (October 2024 - December 2024) - Jaipur"
            result=""
            des={
              <>
                ● Performed Customer Lifetime Value (CLTV) analysis to identify high-value segments and improve retention strategies.<br />
                ● Analyzed marketing channels, highlighting social media for conversions and email marketing for cost-efficiency.<br />
                ● Used Python, Pandas, and Plotly for insights into acquisition costs, revenue distribution, and CLTV.<br />
                ● Found referrals and social media acquisitions most valuable, guiding better acquisition strategies.<br />
                ● View Project:{" "}
                <a
                  href="https://github.com/heyamay/Customer-Lifetime-Value-Analysis"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline"
                >
                  Customer Lifetime Value Analysis
                </a>
              </>
            }
          />
          <ResumeCard
            title="Data Analysis Intern"
            subTitle="Cognifyz Technologies (August 2024 - September 2024) - NOIDA"
            result=""
            des={
              <>
                ● Analyzed a 1000+ restaurant dataset to identify top cuisines, city trends, and price ranges.<br />
                ● Assessed online delivery and 500+ ratings, boosting customer satisfaction by 15%.<br />
                ● Explored 30+ cuisine combinations, enhancing menu performance and engagement.<br />
                ● Mapped locations and evaluated 50+ restaurant chains for popularity.<br />
                ● Used Python (Pandas, Matplotlib, Seaborn) for data analysis and visualization.<br />
                ● View Project:{" "}
                <a
                  href="https://github.com/heyamay/Consumer-Trends-and-Preferences-in-the-Restaurant-Industry"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline"
                >
                  Consumer Trends and Preferences in the Restaurant Industry
                </a>
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
