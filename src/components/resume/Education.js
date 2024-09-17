import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2002 - 2014</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="B.Tech in Electronics & Communication Engineering"
            subTitle="Asansol Engineering College (2015 - 2019)"
            result="7.92 DGPA"
            des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
          />
          <ResumeCard
            title="Senior Secondary School Education"
            subTitle="D.A.V Public School (2012 - 2014)"
            result="81.8%"
            des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          />
          <ResumeCard
            title="Secondary School Education"
            subTitle="D.A.V Public School (2002 - 2012)"
            result="87.4%"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2019 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Consultant"
            subTitle="Capgemini - (2024 - Present)"
            result="INDIA"
            des="It provides business and IT consulting solutions in various domain, as an Consultant was involved in website design. "
          />
          <ResumeCard
            title="Analyst"
            subTitle="Deloitte - (2021 - 2024)"
            result="INDIA"
            des="It provides business and IT consulting solutions in various domain, as an Analyst was involved in website design. "
          />
          <ResumeCard
            title="Systems Engineer"
            subTitle="TCS - (2019 - 2021)"
            result="INDIA"
            des="It provides business and IT consulting solutions in various domain, as a Systems Engineer, involve in training."
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Education