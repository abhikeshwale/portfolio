import React from "react";

const TitleCard = (props) => {
  return (
    <div className="flex justify-center items-center ">
      <h1 className="text-8xl max-sm:text-6xl opacity-5 font-extrabold relative">
        {props.title}
      </h1>
      <p className="absolute mt-6 mb-6 text-4xl max-sm:text-2xl items-center font-extrabold ">
        {props.subTitle}
      </p>
      <span className="border absolute mt-10    border-teal-500 w-20"></span>
    </div>
  );
};

export default TitleCard;
