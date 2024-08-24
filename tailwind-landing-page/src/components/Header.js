import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faFileCode,
  faHandBackFist,
  faLaptop,
} from "@fortawesome/free-solid-svg-icons";
import CurvedArrow from "../assets/asset 2.svg";
import Carousel from "../utils/Carousel";
import { carousel1 } from "../constants/carousel-mapping";
import { carousel2 } from "../constants/carousel-mapping";

const Header = () => {
  return (
    <div className="text-base bg-gradient-to-b from-purple-50 via-orange-50 to-transparent min-h-screen flex flex-col">
      {/* banner */}
      <div className="flex justify-center content-center">
        <div className="flex justify-center content-center bg-yellow-50 border border-yellow-300 py-1 px-2 rounded-lg shadow-md hover:-translate-y-1 transition group hover:shadow-lg mt-10 h-9">
          <div className="w-2 h-2 bg-yellow-400 rounded-full border border-yellow-600 mt-2 mr-2"></div>
          <span className="text-yellow-600">v0.21.1:</span>
          <span className="text-yellow-800 mx-1">Find-in-page bug fixes</span>
          <FontAwesomeIcon
            icon={faArrowRight}
            className="text-yellow-600 ml-1 mt-1 group-hover:translate-x-1 transition duration-300"
          />
        </div>
      </div>
      {/* banner-below */}
      <div className="text-gray-500 flex justify-center content-center mt-10">
        <div className="mr-2">
          <FontAwesomeIcon icon={faFileCode} />
          <span className="ml-1">Code Optional</span>
        </div>
        <div className="mx-3">
          <FontAwesomeIcon icon={faHandBackFist} />
          <span className="ml-1">Drag & Drop builder</span>
        </div>
        <div className="ml-2">
          <FontAwesomeIcon icon={faLaptop} />
          <span className="ml-1">Windows, Max or Linux</span>
        </div>
      </div>
      {/* heading */}
      <div className="flex flex-col justify-center content-center mx-auto mt-10 w-[650px] gap-2">
        <div className="text-6xl font-bold text-center tracking-wide">
          Web app to desktop
        </div>
        <div className="text-6xl font-bold text-center tracking-wide">
          app in minutes
        </div>
        <div className="w-[650px] text-center mt-4 text-2xl font-semibold">
          Take your web app codebase and transform it into a cross platform
          desktop app with native functionality.
        </div>
      </div>

      {/* buttons */}
      <div className="mx-auto mt-10">
        <button className="bg-primary text-white px-5 py-3 rounded-lg hover:bg-blue-600">
          Download Now
        </button>
        <button className="bg-white p-3 ml-3 rounded-lg px-5 py-3 border border-black">
          Read Docs
        </button>
      </div>

      {/* on scroll carousel heading */}
      <div className="flex justify-center content-center mt-10">
        <img alt="curved-arrow" src={CurvedArrow} className="mt-3" />
        <div className="mx-4">Apps powered by toDesktop</div>
        <img
          alt="curved-arrow"
          src={CurvedArrow}
          className="scale-x-[-1] mt-3"
        />
      </div>
      <div className="mt-6">
        <Carousel carousel={carousel1} direction="rtl" />
        <Carousel carousel={carousel2} direction="ltr" />
      </div>
    </div>
  );
};

export default Header;
