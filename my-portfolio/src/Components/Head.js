import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

/**
 *
 * @returns https://flowbite.com/docs/components/navbar/ check here for responsive navbar
 */

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
      <div className="flex flex-1 items-center justify-center font-normal">
        <div className="flex-10 ">
          <nav class="">
            <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
              <a href="https://flowbite.com/" class="flex items-center">
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                  Abhikesh
                </span>
              </a>
              <button
                data-collapse-toggle="navbar-default"
                type="button"
                class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-default"
                aria-expanded="false"
              >
                <span class="sr-only">Open main menu</span>
                <svg
                  class="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>
              <div class="hidden w-full md:block md:w-auto" id="navbar-default">
                <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                  <li>
                    <a
                      href="/"
                      class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                      aria-current="page"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#about"
                      class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="#resume"
                      class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    >
                      Resume
                    </a>
                  </li>

                  <li>
                    <a
                      href="#contact"
                      class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
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
              <a
                href="https://www.facebook.com/abhikesh.wale/"
                className="active:text-blue-500"
              >
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
