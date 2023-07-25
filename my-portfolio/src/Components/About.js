import React from "react";
import TitleCard from "./TitleCard";
import resume from "../assets/Abhikesh_Wale_JLPT_N2.pdf"
const About = () => {
  return (
    <div
      id="about"
      className="py-32 flex flex-col bg-slate-50 justify-center items-center">
      <TitleCard title="ABOUT ME" subTitle="Know Me More" />
      <div className="flex justify-between pt-7 max-sm:flex-col">
        <div className="flex-col pt-4  " id="about-container">
          <h2 className="text-3xl font-bold leading-10">
            I'm <span className="text-emerald-400">Abhikesh Wale,</span> a
            FrontEnd Developer
          </h2>
          <p className="text-base leading-loose">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incis nostrud exerlaborum.
          </p>
          <p className="text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididuitation ullamco laboris nin reprehenderit in
            voluptate velip proidentollorum.
          </p>
        </div>
        <div
          className="flex flex-1 flex-col w-1/3 max-sm:justify-center max-sm:pr-[25%]  max-sm:pl-[15%] max-sm:w-1/2 "
          id="personal-info-container">
            <div> <table className=" ">
            <tr className="border-b ">
              <td className="p-4">
                <b className="text-emerald-400">Name :</b> Abhikesh Wale
              </td>
            </tr>
            <tr className="border-b">
              <td className="p-4">
                <b className="text-emerald-400">Email :</b>{" "}
                abhikeshwale@gmail.com
              </td>
            </tr>
            <tr className="border-b">
              <td className="p-4">
                <b className="text-emerald-400">Age :</b> 27
              </td>
            </tr>
            <tr className="border-b">
              <td className="p-4">
                <b className="text-emerald-400">From :</b> Maharashtra, India
              </td>
            </tr>
          </table></div>
         <div className="flex justify-center">
        <a href={resume} download="Abhikesh Resume">  <button className="text-white border m-1 p-2 h-[45px] w-44 duration-500 rounded-full px-3 bg-emerald-400 hover:bg-emerald-500 hover:shadow-[0 5px 15px rgba(0,0,0,.15)] ">Download CV</button>
        </a>  </div>  </div>
      </div>
      <div id="about-summury-container" className="pt-4">
        <div className="flex justify-between gap-9">
          <div className="flex flex-col items-center">
            <h1 className="text-4xl font-bold "> 4.5+ </h1>
            <h1> Years Experiance </h1>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-4xl font-bold"> JLPT N2 </h1> 
            <h1> Certified(8/2022) </h1>
          </div>

          <div className="flex flex-col items-center">
            <h1 className="text-4xl font-bold"> 1.5+ </h1>
            <h1> Years living in Japan </h1>
          </div>
        </div>

    
      </div>
    </div>
  );
};

export default About;
