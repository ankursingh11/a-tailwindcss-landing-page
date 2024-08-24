import React from "react";
import CompanyLogo from "../assets/asset 0.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import YLogo from "../assets/asset 54.svg";

// import { faGithub } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
// import { faGithub } from "@fortawesome/free-regular-svg-icons";

const Footer = () => {
  return (
    <div className = "flex flex-col mb-10">
      <div className="mt-[6rem] mx-[5rem] bg-gray-50 rounded-lg flex justify-between px-5 py-10 text-xl">
        <div className="flex">
          <img alt="company logo" src={CompanyLogo} className="mr-2 -mt-2" />
          <div>ToDesktop</div>
        </div>
        <div className="text-gray-600 ">
          <FontAwesomeIcon icon={faGithub} className="mx-4 hover:text-black cursor-pointer" />
          <FontAwesomeIcon icon={faTwitter} className="mx-4 hover:text-black cursor-pointer" />
          <span className="mx-4 font-light text-base hover:text-black cursor-pointer">Documentation</span>
        </div>
      </div>
      <div className = "flex justify-center mt-10">
        <img alt = "YLogo" src = {YLogo} className = "w-4 h-4 mr-4 mt-0.5"/>
        <div className = "text-sm font-light">A Y Combinator company.</div>
      </div>
      <div className = "flex justify-center text-sm my-6 text-gray-400">
      © 2024 ToDesktop, Inc. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
