import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronUp } from "@fortawesome/free-solid-svg-icons";
const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    });
  }, []);
  const scroll = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <button
      onClick={scroll}
      style={{ display: isVisible ? "block" : "none" }}
      className=" h-[20px] fixed  bottom-[50px] right-[50px] animate-pulse hover:scale-125 hover:animate-none text-violet-400 hover:text-violet-500 "
    >
      <FontAwesomeIcon className="" icon={faCircleChevronUp} />
    </button>
  );
};

export default ScrollToTop;
