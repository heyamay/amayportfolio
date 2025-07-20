import { motion } from 'framer-motion';
import React from 'react';

const Skills = () => {
  const skills = [
    { skill: 'Linux', level: '100%' },
    { skill: 'AWS', level: '95%' },
    { skill: 'Jenkins', level: '85%' },
    { skill: 'Docker', level: '90%' },
    { skill: 'Bash Scripting', level: '80%' },
    { skill: 'Terraform', level: '85%' },
    { skill: 'Prometheus', level: '95%' },
    { skill: 'Grafana', level: '80%' },
    { skill: 'Git/Github', level: '90%' },
    { skill: 'PostgreSQL', level: '85%' },
    { skill: 'Object-oriented programming (OOP)', level: '95%' },
    { skill: 'Kubernetes', level: '85%' },
    { skill: 'Jira/Confluence', level: '75%' },
    { skill: 'DevOps', level: '80%' },
    { skill: 'Python', level: '85%' },
    { skill: 'Java', level: '80%' },
    { skill: 'SQL', level: '80%' },
    { skill: 'Postman', level: '75%' },
    { skill: 'Gitlab CI', level: '90%' },
    { skill: 'Github Actions', level: '75%' },
    { skill: 'GitOps - ArgoCD', level: '85%' },
    { skill: 'Bitbucket', level: '80%' },
  ];

  const leftSkills = skills.slice(0, Math.ceil(skills.length / 2));
  const rightSkills = skills.slice(Math.ceil(skills.length / 2));

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col items-center gap-10 p-6 sm:p-12"
    >
      {/* Header */}
      <div className="w-full max-w-4xl text-center">
        <div className="py-6 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px] uppercase">
            Features
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">Technical Skills</h2>
        </div>
      </div>

      {/* Skills List */}
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column */}
        <div className="flex flex-col gap-6">
          {leftSkills.map(({ skill, level }, index) => (
            <div className="overflow-x-hidden" key={skill}>
              <p className="text-sm uppercase font-medium">{skill}</p>
              <span className="w-full h-2 bg-gray-200 rounded-md inline-flex mt-2">
                <motion.span
                  initial={{ x: '-100%', opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                  style={{ width: level }}
                >
                  <span className="absolute -top-7 right-0 text-xs text-gray-800">
                    {level}
                  </span>
                </motion.span>
              </span>
            </div>
          ))}
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-6">
          {rightSkills.map(({ skill, level }, index) => (
            <div className="overflow-x-hidden" key={skill}>
              <p className="text-sm uppercase font-medium">{skill}</p>
              <span className="w-full h-2 bg-gray-200 rounded-md inline-flex mt-2">
                <motion.span
                  initial={{ x: '-100%', opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                  style={{ width: level }}
                >
                  <span className="absolute -top-7 right-0 text-xs text-gray-800">
                    {level}
                  </span>
                </motion.span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
