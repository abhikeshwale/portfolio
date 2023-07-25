import React from "react";
import FooterImg from "../assets/footer_image.jpg";
const Footer = () => {
  return (
    <div>
      <div className="">
        <img className="w-screen absolute h-10v " src={FooterImg}></img>
        <div className="relative pb-7 flex justify-center gap-[10%]  m-4 max-sm:justify-center  max-sm:text-sm">
          <h1>Copyright © 2023. All Rights Reserved.</h1>
          <h1>
            Designed & Developed by <b>Abhikesh Wale</b>{" "}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
