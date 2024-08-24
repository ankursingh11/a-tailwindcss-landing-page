import React from "react";
import ClickUpDesktop from "../assets/asset 46.png";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Build = () => {
  return (
    <div className="mt-[8rem] mx-[5rem]">
      <div className="flex justify-between gap-10 bg-black rounded-xl">
        <div className="flex flex-col text-white p-8 gap-20">
          <div className="text-gray-400 text-xl">READY TO START BUILDING?</div>
          <div className="w-[35rem]">
            <h1>Create your desktop app for free*</h1>
          </div>
          <div>
            <p className="text-gray-400 text-xl w-[500px]">
              ToDesktop Builder will take you step-by-step through the process
              of creating your first desktop app in just a few minutes.
            </p>
          </div>
          <div className="text-lg bg-blue-700 rounded-lg flex justify-center content-center h-9 cursor-pointer py-1 hover:-translate-y-1 transition">
            <FontAwesomeIcon icon={faDownload} className="relative top-1" />
            <span className="mx-3">Download ToDesktop Now</span>
          </div>
          <div>
            <p className="text-gray-400 text-sm">
              <i>
                *You can create a desktop app and run it on your computer for
                free. You will only be charged if you want to create a
                distributable app for your customers.
              </i>
            </p>
          </div>
        </div>
        <div>
          <img alt="clickup" src={ClickUpDesktop} className="relative top-10" />
        </div>
      </div>
    </div>
  );
};

export default Build;
