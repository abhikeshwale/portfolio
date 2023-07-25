import React from "react";
import TitleCard from "./TitleCard";
const About = () => {
  return (
    <div
      id="about"
      className="pt-32 pb-32 flex flex-col bg-slate-50 justify-center m-4 items-center"
    >
      <TitleCard title="ABOUT ME" subTitle="Know Me More" />
      <div className="flex justify-between ">
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
          className="flex flex-1 flex-col w-1/3 max-w-md"
          id="personal-info-container"
        >
          <table className="">
            <tr className="border-b ">
              <td className="p-4">
                <b>Name</b>: Abhikesh Wale
              </td>
            </tr>
            <tr className="border-b">
              <td className="p-4">
                <b>Email:</b> abhikeshwale@gmail.com
              </td>
            </tr>
            <tr className="border-b">
              <td className="p-4">
                <b>Age:</b> 27
              </td>
            </tr>
            <tr className="border-b">
              <td className="p-4">
                <b>From:</b> Maharashtra, India
              </td>
            </tr>
          </table>
        </div>
      </div>
      <div id="about-summury-container">
        <table>
          <tr className="text-5xl">
            <th>4.5+</th>
            <th>JLPT N2</th>
            <th>1.5+</th>
          </tr>
          <tr>
            <td>Years Experiance</td>
            <td>Certified(8/2022)</td>
            <td>Years living in Japan</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default About;
