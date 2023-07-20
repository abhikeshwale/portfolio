import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
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
    <div className="flex  flex-col max-w-full h-90v items-center  border-neutral-900 border justify-center">
      <span className="text-7xl font-bold">
        Hi ! I Am {text}
        <Cursor />
      </span>
      <span className="text-xl m-4">Living in Yokohama, Japan</span>
      <button className="border m-1 p-2 hover:scale-110 duration-75 rounded-full px-3 border-red-500 hover:border-2 hover:border-green-600 hover:bg-green-400">
        About Me
      </button>
      <a href="/">
        {" "}
        <FontAwesomeIcon
          icon={faCaretDown}
          bounce
          className="absolute bottom-0 pb-7"
        />
      </a>
    </div>
  );
};
export default Home;
