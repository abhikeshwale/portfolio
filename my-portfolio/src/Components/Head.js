import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const Head = () => {
  return (
    <div className="h-10v flex justify-between fix mt-0 z-[1] overflow-hidden drop-shadow-xl ">
      <div className="flex-1 ml-8 items-center flex gap-8">
        <a href="/">
          <div className="  font-pacifico text-5xl">Abhikesh</div>
        </a>
      </div>
      <div className="flex flex-1 items-center justify-center font-normal">
        <div className="flex-10 ">
          <ul className=" text-base  flex gap-8 ml-16 hover:cursor-pointer ">
           <a href="/"> <li className="hover:scale-125 hover:font-bold hover:text-violet-700 duration-75">
              Home
            </li></a>
            <a href="#about">  <li className="hover:scale-125 hover:font-bold hover:text-violet-700 duration-75">
              About
            </li></a>
            <a href="#resume">  <li className="hover:scale-125 hover:font-bold  hover:text-violet-700 duration-75">
              Resume
            </li></a>
            <a href="#contact">  <li className="hover:scale-125 hover:font-bold hover:text-violet-700 duration-75">
              Contact
            </li></a>
          </ul>
        </div>
      </div>
      <div className="flex flex-1 items-center  font-normal">
        <div className="flex-10">
          <ul className="flex justify-between gap-8 mr-8">
            <li>
              <a href="https://www.instagram.com/abhikesh_wale/">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="hover:text-pink-600  cursor-pointer hover:scale-125 duration-75 "
                  size="2xl"
                />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/abhikesh.wale/">
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="hover:text-blue-600 hover:scale-125 duration-75 cursor-pointer"
                  size="2xl"
                />{" "}
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/abhikesh-wale-59a371a9/">
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="hover:text-blue-900  hover:scale-125 duration-75 cursor-pointer"
                  size="2xl"
                />
              </a>
            </li>
            <li>
              <a href="https://github.com/abhikeshwale">
                <FontAwesomeIcon
                  icon={faGithub}
                  className="hover:text-orange-500   hover:scale-125 duration-75 cursor-pointer"
                  size="2xl"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Head;
