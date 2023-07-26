import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const Head = () => {
  const [navColor, setnavColor] = useState("");
  const listenScrollEvent = () => {
    window.scrollY > 100
      ? setnavColor("rgb(0 0 0")
      : setnavColor("transparent");
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  return (
    <div
      style={{
        backgroundColor: navColor,
        transition: "all 1s",
        height: "10vh",
      }}
      id="navbar"
      className="flex  bg-opacity-0  shadow-emerald-400 justify-between mt-0  fixed w-full top-0 z-50 "
    >
      <div className="flex-1 ml-8 items-center flex gap-8">
        <a href="/">
          <div className="  font-pacifico text-5xl">Abhikesh</div>
        </a>
      </div>
      <div className="flex flex-1 items-center justify-center font-normal">
        <div className="flex-10 ">
          <ul className=" text-base  flex gap-8 ml-16 hover:cursor-pointer ">
            <a href="/">
              <li className="drop-shadow-2xl hover:scale-125 hover:font-bold hover:text-emerald-200 duration-75">
                Home
              </li>
            </a>
            <a href="#about">
              <li className="hover:scale-125 hover:font-bold  hover:text-emerald-200 duration-75">
                About
              </li>
            </a>
            <a href="#resume">
              {" "}
              <li className="hover:scale-125 hover:font-bold   hover:text-emerald-200 duration-75">
                Resume
              </li>
            </a>
            <a href="#contact">
              {" "}
              <li className="hover:scale-125 hover:font-bold  hover:text-emerald-200 duration-75">
                Contact
              </li>
            </a>
          </ul>
        </div>
      </div>
      <div className="flex flex-1 items-center  font-normal">
        <div className="flex-10">
          <ul className="flex  max-sm:hidden justify-between gap-8 mr-8">
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
