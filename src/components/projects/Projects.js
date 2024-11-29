import React from "react";
import Title from "../layouts/Title";
import ProjectsCard from "./ProjectsCard";

// Importing all images
import creditCardImage from "../../assets/images/projects/creditcard.jpg";
import delhiMetroImage from "../../assets/images/projects/delhimetro.jpeg";
import telecomImage from "../../assets/images/projects/telecom.png";
import musicStoreImage from "../../assets/images/projects/music_analysis.jpg";
import electionAdImage from "../../assets/images/projects/election_Ad.jpeg";
import restaurantImage from "../../assets/images/projects/restaurent.jpeg";
import airlinesImage from "../../assets/images/projects/Airlines.jpg";
import superStoreImage from "../../assets/images/projects/super_store.jpg";
import dietRecallImage from "../../assets/images/projects/diet_recall.jpg";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Credit Card Financial Dashboard using Power BI"
          des="Developed a Credit Card Financial Dashboard in Power BI to deliver real-time insights into revenue, customer segmentation, and transaction performance, utilizing PostgreSQL for data processing. Transformed complex financial data into visual analytics, enabling stakeholders to make informed, data-driven decisions."
          src={creditCardImage}
          git="https://github.com/heyamay/Credit-Card-Financial-Dashboard"
        />
        <ProjectsCard
          title="Delhi Metro Network Analysis"
          des="Analyzed the Delhi Metro network using Python to optimize routes and improve passenger flow. Visualized the geographical distribution of stations, analyzed the growth of the metro network over time, and assessed the efficiency of metro lines."
          src={delhiMetroImage}
          git="https://github.com/heyamay/Delhi-Metro-Network-Analysis"
        />
        <ProjectsCard
          title="Telecom Customer Churn Prediction"
          des="Analyzed telecom customer data to predict churn using machine learning models, specifically Logistic Regression and KNN. The logistic regression model achieved 80.45% accuracy, providing valuable insights for reducing churn in the telecom industry."
          src={telecomImage}
          git="https://github.com/heyamay/Telecom-Customer-Churn-Prediction"
        />
        <ProjectsCard
          title="SQL Music Store Analysis"
          des="SQL Music Store Insights is a data analytics project designed to explore a music store database using SQL queries. It answers business questions such as identifying top-selling tracks, best customers, and revenue by genre or artist."
          src={musicStoreImage}
          git="https://github.com/heyamay/SQL_Music_Store_Analysis"
        />
        <ProjectsCard
          title="Elections Ad Spending Analysis"
          des="This project looks at how much money political parties spend on ads during elections and its effect on voter turnout in India. It uses data analysis and visualizations to show spending patterns by state and party."
          src={electionAdImage}
          git="https://github.com/heyamay/Elections-Ad-Spending-Analysis"
        />
        <ProjectsCard
          title="Consumer Trends in the Restaurant Industry"
          des="Conducted in-depth analysis of a restaurant dataset, covering top cuisines, city trends, price ranges, delivery impact, ratings, cuisine combos, and chain popularity. Utilized Pandas, Matplotlib, and Seaborn for insights."
          src={restaurantImage}
          git="https://github.com/heyamay/Consumer-Trends-and-Preferences-in-the-Restaurant-Industry"
        />
        <ProjectsCard
          title="Twitter Airlines Sentiment Analysis"
          des="This project contains sentiment analysis focusing on U.S. airlines using Twitter data. The dataset includes tweets classified as positive, negative, or neutral, with emphasis on identifying specific negative sentiments."
          src={airlinesImage}
          git="https://github.com/heyamay/Twitter-Airlines-Sentiment-Analysis"
        />
        <ProjectsCard
          title="Super Store Sales Dashboard"
          des="Created a sales dashboard for a SuperStore using Power BI to analyze sales performance, customer behavior, and market trends. The dashboard includes features like sales by region and 15-day sales forecasts."
          src={superStoreImage}
          git="https://github.com/heyamay/Superstore-sales-dashboard"
        />
        <ProjectsCard
          title="Mobile Application for Diet Recall"
          des="Created an app that helps users track their daily food intake, understand nutritional content, set fitness goals, plan workouts, and receive reminders for better health management."
          src={dietRecallImage}
          git="https://github.com/heyamay/Diet-recall-application"
        />
      </div>
    </section>
  );
};

export default Projects;
