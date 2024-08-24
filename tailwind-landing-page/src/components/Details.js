import React from "react";
import NaiveIcon from "../assets/asset 37.png";
import NaiveIcon1 from "../assets/asset 38.png";
import NaiveIcon2 from "../assets/asset 39.png";
import NaiveIcon3 from "../assets/asset 40.png";
import Carousel from "../utils/TextCarousel";


const bottomCarousel = ["Download Analytics", ":", "Custom Menus", ":", "Multi-window-support", ":", "Trays", ":", "Deep Linking", ":"];

const Details = () => {
  return (
    <div className="mt-[8rem] mx-[5rem]">
      <div className="text-5xl">
        <div>ToDesktop handles the</div>
        <div className="mt-1">details</div>
      </div>
      {/* Bento Grid */}
      <div className="grid grid-cols-3 grid-rows-9 gap-3 mt-[5rem]">
        <div className="row-span-6 col-span-1 bg-gray-50 rounded-xl flex flex-col justify-center items-center p-10 border-1 border-gray-300 hover:bg-gradient-to-br from-red-50 via-purple-50 to-yellow-50 hover:border-white">
          <div className="text-2xl mb-10">Naive Notifications</div>
          <p className="text-base font-light text-center">
            We’ll ensure the underlying browser is up to date and deliver
            performance improvements, security patches, & additional features.
          </p>
          <img alt="naive" src={NaiveIcon3} className="mt-10" />
        </div>
        <div className="row-span-3 col-span-1 bg-gray-50 rounded-xl flex flex-col justify-center items-center p-10 border-1 border-gray-300 hover:bg-gradient-to-br from-red-50 via-purple-50 to-yellow-50 hover:border-white">
          <div className="text-xl mb-10">Naive Notifications</div>
          <img alt="naive" src={NaiveIcon} />
        </div>
        <div className="row-span-6 col-span-1 bg-gray-50 rounded-xl flex flex-col justify-center items-center p-10 border-1 border-gray-300 hover:bg-gradient-to-br from-red-50 via-purple-50 to-yellow-50 hover:border-white">
          <div className="text-2xl mb-10">Naive Notifications</div>
          <p className="text-base font-light text-center">
            We’ll ensure the underlying browser is up to date and deliver
            performance improvements, security patches, & additional features.
          </p>
          <img alt="naive" src={NaiveIcon1} />
        </div>
        <div className="row-span-6 col-span-1 bg-gray-50 rounded-xl flex flex-col justify-center items-center p-10 border-1 border-gray-300 hover:bg-gradient-to-br from-red-50 via-purple-50 to-yellow-50 hover:border-white">
          <div className="text-2xl mb-10">Naive Notifications</div>
          <p className="text-base font-light text-center">
            We’ll ensure the underlying browser is up to date and deliver
            performance improvements, security patches, & additional features.
          </p>
          <img alt="naive" src={NaiveIcon1} />
        </div>
        <div className="row-span-6 col-span-1 bg-gray-50 rounded-xl flex flex-col justify-center items-center p-10 border-1 border-gray-300 hover:bg-gradient-to-br from-red-50 via-purple-50 to-yellow-50 hover:border-white">
          <div className="text-xl mb-10">Naive Notifications</div>
          <img alt="naive" src={NaiveIcon} />
        </div>
        <div className="row-span-3 col-span-1 bg-gray-50 rounded-xl flex flex-col justify-center items-center p-10 border-1 border-gray-300 hover:bg-gradient-to-br from-red-50 via-purple-50 to-yellow-50 hover:border-white">
          <div className="text-xl mb-10">Naive Notifications</div>
          <img alt="naive" src={NaiveIcon2} />
        </div>
      </div>
      {/* Bottom Carousel */}
      <div className="mt-20">
        <Carousel carousel={bottomCarousel} direction="rtl" />
      </div>
    </div>
  );
};

export default Details;
