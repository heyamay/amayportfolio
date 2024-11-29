import { motion } from 'framer-motion';
import React from 'react';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col items-center gap-10 p-6 sm:p-12"
    >
      {/* Header Section */}
      <div className="w-full max-w-3xl text-center">
        <div className="py-6 font-titleFont flex flex-col gap-4">
          {/* <p className="text-sm text-designColor tracking-[4px]">2018 - 2025</p> */}
          <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
        </div>
      </div>

      {/* Content Section */}
      <div className="w-full max-w-3xl flex flex-col gap-10 items-center">
        <div className="w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="B-Tech in Computer Science"
            subTitle="KIET Group Of Institutions, Ghaziabad (2021 - 2025)"
            result="70%"
          />
          <ResumeCard
            title="XII (CBSE)"
            subTitle="Defence Public School, Jaipur (2020 - 2021)"
            result="76.4%"
          />
          <ResumeCard
            title="X (ICSE)"
            subTitle="St. John’s School, Ghazipur (2018- 2019)"
            result="82.6%"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
