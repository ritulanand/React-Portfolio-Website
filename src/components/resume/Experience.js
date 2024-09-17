import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2019 - 2024</p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Consultant"
            subTitle="Capgemini - (2024 - Present)"
            result="INDIA"
            des="Created the user interface using HTML, CSS (Sass) and reusable components in React ecosystem. Worked on developing 
            responsive websites using Sass. Worked on Accessibility issues to make it AA/AAA compliant. "
          />
          <ResumeCard
            title="Analyst"
            subTitle="Deloitte - (2021 - 2024)"
            result="INDIA"
            des="Created the user interface of Generative AI in React ecosystem. 
            Worked on creating reusable components in React."
          />
          <ResumeCard
            title="Systems Engineer"
            subTitle="TCS - (2019 - 2021)"
            result="INDIA"
            des="I have primarily worked under Insurance domain(Motor Insurance and Health 
              Insurance) projects. Developing core front End Modules & UI as per specified mock ups along with validation on client 
              side."
          />
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2021 - 2022</p>
          <h2 className="text-4xl font-bold">Tools Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="GITHUB"
            subTitle="GIT (2020- 2024)"
            result="INDIA"
            des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
          />
          <ResumeCard
            title="Leetcode"
            subTitle="Web Developer and Instructor (2022 - Present)"
            result="INDIA"
            des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          />
          <ResumeCard
            title="GeeksforGeeks"
            subTitle="Web Developer (2024 - Present)"
            result="INDIA"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
