import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import { SKILLS, SUMMARY } from "../Utils/Data";
import TitleCard from "./TitleCard";
import ItemNameCard from "./ItemNameCard";

const Resume = () => {
  const SkillsCard = ({ skills }) => {
    const { name, percent } = skills;
    return (
      <div>
        <div className="flex justify-between px-1">
          <h1>{name}</h1>
          <h1>{percent}</h1>
        </div>
        <ProgressBar
          className="mb-8 "
          completed={percent}
          bgColor="grey"
          animateOnRender={true}
        />
      </div>
    );
  };

  const SummaryCard = ({ data }) => {
    const { Year, Title, Institute } = data;
    return (
      <div
        id="education-card"
        className="border border-gray-400 rounded-lg p-6 mb-8 hover:shadow-xl "
      >
        <p className="text-center bg-cyan-800 rounded-lg inline-block px-4 ">
          {Year}
        </p>
        <h1 className="text-2xl py-2">{Title}</h1>
        <p>{Institute}</p>
      </div>
    );
  };

  return (
    <div>
      <TitleCard title="SUMMARY" subTitle="Resume" />
      <div
        className="flex justify-center max-sm:flex-col max-sm:justify-center"
        id="summary-container"
      >
        <div
          id="education-container"
          className=" m-4 w-1/2 max-w-[660px] max-sm:w-auto"
        >
          <ItemNameCard name="My Education" />
          {SUMMARY.EducationData.map((data) => {
            return <SummaryCard data={data} />;
          })}
        </div>

        <div
          id="experiance-container"
          className=" m-4  w-1/2 max-w-[660px] max-sm:w-auto"
        >
          <ItemNameCard name="My Experiance" />
          {SUMMARY.CorporateData.map((data) => {
            return <SummaryCard data={data} />;
          })}
        </div>
      </div>

      <div
        id="skills-container "
        className="flex justify-center max-sm:flex-col max-sm:justify-center"
      >
        <div className="m-4 w-1/2 max-w-[660px] max-sm:w-auto ">
          <ItemNameCard name="Language Skills" />
          {SKILLS.LanguageData.map((skill) => {
            return <SkillsCard skills={skill} />;
          })}
        </div>
        <div className=" m-4 w-1/2 max-w-[660px] max-sm:w-auto">
          <ItemNameCard name="DB & Tools" />
          {SKILLS.ToolsData.map((skill) => {
            return <SkillsCard skills={skill} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Resume;
/**
 *         <div className="ml-8 mr-4 w-1/2 max-w-xl max-sm:w-auto">
          <ProgressBar
            className="mb-8 "
            completed={50}
            bgColor="grey"
            animateOnRender={true}
          />
          <ProgressBar
            className="mb-8 "
            completed={50}
            bgColor="grey"
            animateOnRender={true}
          />
          <ProgressBar
            className="mb-8 "
            completed={50}
            bgColor="grey"
            animateOnRender={true}
          />
        </div>
                  <div
            id="education-card"
            className="border border-gray-400 rounded-lg p-6 mb-8">
            <p className="text-center bg-cyan-800 rounded-lg inline-block px-4 ">
              2014 - 2018
            </p>
            <h1 className="text-2xl py-2">Bachelor of Enginerring</h1>
            <p>Savitribai Phule Pune University</p>
          </div>
          <div
            id="education-card"
            className="border border-gray-400 rounded-lg p-6 mb-8">
            <p className="text-center bg-cyan-800 rounded-lg inline-block px-4 ">
              2014 - 2018
            </p>
            <h1 className="text-2xl py-2">Bachelor of Enginerring</h1>
            <p>Savitribai Phule Pune University</p>
          </div>
          <div
            id="education-card"
            className="border border-gray-400 rounded-lg p-6 mb-8">
            <p className="text-center bg-cyan-800 rounded-lg inline-block px-4 ">
              2014 - 2018
            </p>
            <h1 className="text-2xl py-2">Bachelor of Enginerring</h1>
            <p>Savitribai Phule Pune University</p>
          </div>





        
 */
