import React from "react";

const Resume = () => {
  return (
    <div>
      <div className="flex justify-center items-center border border-red-900">
        <h1 className="text-8xl opacity-5 relative">SUMMARY</h1>
        <p className="absolute mt-6 mb-6 text-4xl ">Resume</p>
        <span className="border absolute mt-10    border-teal-500 w-20"></span>
      </div>
      <div
        className="flex justify-center max-sm:flex-col max-sm:justify-center"
        id="summary-container">
        <div
          id="education-container"
          className="ml-8 mr-4 w-1/2 max-w-xl max-sm:w-auto">
          left
          <h1>My Education</h1>
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
        </div>
        "
        <div
          id="experiance-container"
          className="ml-4 mr-8 mb-4 w-1/2 max-w-xl max-sm:w-auto">
          right
          <h1>My Experiance</h1>
          <div
            id="experiance-card"
            className="border border-gray-400 rounded-lg p-6 mb-8">
            <p className="text-center bg-cyan-800 rounded-lg inline-block px-4 ">
              2014 - 2018
            </p>
            <h1 className="text-2xl py-2">Bachelor of Enginerring</h1>
            <p>Savitribai Phule Pune University</p>
          </div>
          <div
            id="experiance-card"
            className="border border-gray-400 rounded-lg p-6 mb-8">
            <p className="text-center bg-cyan-800 rounded-lg inline-block px-4 ">
              2014 - 2018
            </p>
            <h1 className="text-2xl py-2">Bachelor of Enginerring</h1>
            <p>Savitribai Phule Pune University</p>
          </div>
          <div
            id="experiance-card"
            className="border border-gray-400 rounded-lg p-6 mb-8                                                                                                           ">
            <p className="text-center bg-cyan-800 rounded-lg inline-block px-4 ">
              2014 - 2018
            </p>
            <h1 className="text-2xl py-2">Bachelor of Enginerring</h1>
            <p>Savitribai Phule Pune University</p>
          </div>
        </div>
      </div>
      <div
        id="skills-container"
        className="flex justify-center max-sm:flex-col max-sm:justify-center">
        <h1>Skill</h1>
        <div className="flex ">
          <div>
            <div className="ml-8 mr-4 w-1/2 max-w-xl max-sm:w-auto"> 
              <div className=" relative flex justify-between">
                <p className="justify-end">HTML</p>
                <p>50%</p>
              </div>
              <div>
                <span className="border absolute  h-[10px] pb-[10px] rounded-lg border-teal-500 w-1/2 max-w-xl">
                  <span className="border  absolute justify-center h-[10px]  bg-slate-800 rounded-r-none rounded-l-lg border-teal-500 w-1/2"></span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
