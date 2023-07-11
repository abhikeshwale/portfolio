import React from "react";

const Resume = () => {
  return (
    <div className="border border-lime-400">
      <div >
        <div className="flex justify-center text-left overflow-x-auto">
          <table>
            <tr>
              <th className="text-2xl">My Education</th>
              <th className="text-2xl">My Experience</th>
            </tr>
            <tr>
              <td>
                <p className="bg-lime-400 inline-block rounded-md px-2">2014 - 2018</p>
                <h1 className="text-xl"> Bachelor of Engineering</h1>
                <p>Savitribai Phule Pune University</p>
              </td>
              <td>
                <p className="bg-lime-400 inline-block rounded-md px-2">03/2022 - Current</p>
                <h1 className="text-xl">Software Engineer</h1>
                <p>TechnoPro Engineering</p>
              </td>
            </tr>
            <tr>
              <td>
                <p className="bg-lime-400 inline-block rounded-md px-2">2012 - 2014</p>
                <h1 className="text-xl">Higher Secondary Education</h1>
                <p>Pune University</p>
              </td>
              <td>
                <p className="bg-lime-400 inline-block rounded-md px-2">07/2021 - 01/2022</p>
                <h1 className="text-xl">Associate Consultant</h1>
                <p>Capgemini Technology Services</p>
              </td>
            </tr>
            <tr>
              <td>
                <p className="bg-lime-400 inline-block rounded-md px-2">2007 - 2012</p>
                <h1 className="text-xl">Secondary School Education</h1>
                <p>Pune University</p>
              </td>
              <td>
                <p className="bg-lime-400 inline-block rounded-md px-2">12/2018 - 07/2021</p>
                <h1 className="text-xl">Programmer Analyst</h1>
                <p>Cognizant Technology Solutions</p>
              </td>
            </tr>
          </table>
        </div>
        <div></div>
      </div>
      <div>skills</div>
      <div>My Hobbbies</div>
      <button>Download CV</button>
    </div>
  );
};

export default Resume;
