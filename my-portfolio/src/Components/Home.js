import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import Head from "./Head";
const Home = () => {
  const [text] = useTypewriter({
    words: [
      "Abhikesh",
      "FrontEnd Developer",
      "Bilingual Engineer",
      "JLPT N2 Certified",
    ],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 100,
  });

  return (
    <div className="bg-bg bg-cover bg-opacity-80 text-white">
      <Head></Head>
      <div className="flex  flex-col max-w-full h-100v items-center gap-5  justify-center">
        <span className="  text-7xl font-bold">
          I Am {text}
          <Cursor />
        </span>
        <span className="text-xl m-4">Living in Yokohama, Japan</span>

        <a href="#about">
          <button className="border m-1 p-2 h-[45px] w-52 duration-500 rounded-full px-3 bg-emerald-400 hover:bg-emerald-500 hover:shadow-[0 5px 15px rgba(0,0,0,.15)] ">
            About Me
          </button>
        </a>
        <a href="#about" className="duration-75">
          <FontAwesomeIcon
            icon={faCaretDown}
            bounce
            className="absolute bottom-0 pb-7 drop-shadow-2xl"
          />
        </a>
      </div>
    </div>
  );
};
export default Home;
