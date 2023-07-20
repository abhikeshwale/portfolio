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
    <div className="h-10v flex justify-between sticky ">
      <div className="flex-1 items-center flex gap-8">
        <div className=" font-bold text-5xl">Abhikesh</div>
      </div>
      <div className="flex flex-1 items-center justify-center font-normal">
        <div className="flex-10">
          <ul className=" text-base flex gap-8 ml-16 hover:cursor-pointer ">
            <li className="hover:scale-125 duration-75">Home</li>
            <li className="hover:scale-125 duration-75">About</li>
            <li className="hover:scale-125 duration-75">Resume</li>
            <li className="hover:scale-125 duration-75">Contact</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-1 items-center  font-normal">
        <div className="flex-10">
          <ul className="flex justify-between gap-8 mr-3">
            <li>
              <FontAwesomeIcon
                icon={faInstagram}
                className="hover:text-pink-600 cursor-pointer hover:scale-150 duration-75 "
                size="xl"
              />
            </li>
            <li>
              <FontAwesomeIcon
                icon={faFacebook}
                className="hover:text-blue-600 hover:scale-150 duration-75 cursor-pointer"
                size="xl"
              />
            </li>
            <li>
              <FontAwesomeIcon
                icon={faLinkedin}
                className="hover:text-blue-900 hover:scale-150 duration-75 cursor-pointer"
                size="xl"
              />
            </li>
            <li>
              <FontAwesomeIcon
                icon={faGithub}
                className="hover:text-orange-500 hover:scale-150 duration-75 cursor-pointer"
                size="xl"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Head;
