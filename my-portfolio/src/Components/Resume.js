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
        <div className="flex justify-between p-2 pl-0">
          <h1>{name}</h1>
          <h1>{percent}%</h1>
        </div>
        <ProgressBar
          className="mb-8 "
          completed={percent}
          height="10px"
          customLabel=" "
          bgColor="rgb(52 211 153)"
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
        className="border border-gray-100 rounded-lg p-6 mb-8 hover:shadow-2xl duration-500 "
      >
        <p className="text-center text-white bg-emerald-400 rounded-lg inline-block px-4 ">
          {Year}
        </p>
        <h1 className="text-2xl py-2">{Title}</h1>
        <p>{Institute}</p>
      </div>
    );
  };

  return (
    <div id="resume" className=" py-32">
      <TitleCard title="SUMMARY" subTitle="Resume" />
      <div
        className="flex justify-center pt-7 max-sm:flex-col max-sm:justify-center"
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
