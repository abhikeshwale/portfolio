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
        <div className="font-bold text-xl">Abhikesh</div>
      </div>
      <div className="flex flex-1 items-center justify-center font-normal">
        <div className="flex-10">
          <ul className="flex gap-8 ml-16 hover:cursor-pointer">
            <li>Home</li>
            <li>About</li>
            <li>Resume</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-1 items-center  font-normal">
        <div className="flex-10">
          <ul className="flex justify-between gap-8 mr-3">
            <li>
              <FontAwesomeIcon
                icon={faInstagram}
                className="hover:text-pink-600"
              />
            </li>
            <li>
              <FontAwesomeIcon
                icon={faFacebook}
                className="hover:text-blue-600"
              />
            </li>
            <li>
              <FontAwesomeIcon
                icon={faLinkedin}
                className="hover:text-blue-900"
              />
            </li>
            <li>
              <FontAwesomeIcon
                icon={faGithub}
                className="hover:text-orange-500"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Head;
