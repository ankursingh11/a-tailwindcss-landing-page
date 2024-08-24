import React from "react";
import ClickUpIcon from "../assets/asset 44.svg";
import ClickUpSS from "../assets/asset 46.png";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ClickCEO from "../assets/asset 45.jpeg";

const ClickUpStory = () => {
  return (
    <div className="border border-gray-200 rounded-lg my-[4rem]">
      <div className="p-5">
        <img alt="clickup-icon" src={ClickUpIcon} />
      </div>
      <div className="flex justify-between gap-10">
        <div className="p-5 w-[45rem] flex flex-col gap-6">
          <p className = "text-3xl font-semibold">
            ClickUp used ToDesktop to get their desktop app in front of
            customers in days instead of months.
          </p>
          <div className="flex flex-wrap gap-3">
            <div className="bg-yellow-50 border-2 border-yellow-300 px-2 py-1 rounded-xl text-base text-yellow-700 w-[100px] h-10">
              <FontAwesomeIcon icon={faCheck} className="mr-2" /> Step
            </div>
            <div className="bg-yellow-50 border-2 border-yellow-300 px-2 py-1 rounded-xl text-base text-yellow-700 w-[190px] h-10">
              <FontAwesomeIcon icon={faCheck} className="mr-2" /> Native
              spellcheck
            </div>
            <div className="bg-yellow-50 border-2 border-yellow-300 px-2 py-1 rounded-xl text-base text-yellow-700 w-[220px] h-10">
              <FontAwesomeIcon icon={faCheck} className="mr-2" /> Task time in
              menubar
            </div>
            <div className="bg-yellow-50 border-2 border-yellow-300 px-2 py-1 rounded-xl text-base text-yellow-700 w-[280px] h-10">
              <FontAwesomeIcon icon={faCheck} className="mr-2" /> Notification
              count in the dock
            </div>
            <div className="bg-yellow-50 border-2 border-yellow-300 px-2 py-1 rounded-xl text-base text-yellow-700 w-[270px] h-10">
              <FontAwesomeIcon icon={faCheck} className="mr-2" />
              Global hotkey to create task
            </div>
          </div>
          <div>
            <p className = "text-lg font-light my-5">“ToDesktop provided us with a polished desktop app in no time. Their expert team guided us through a smooth migration from our outdated legacy desktop app, enabling us to deliver new and improved features to our customers within days.”</p>
          </div>
          <div className = "flex content-center">
            <div>
                <img alt = "ClickUPCeo" src = {ClickCEO} className = "rounded-full"/>
            </div>
            <div className = "ml-2">
                <div className = "text-xl">Zeb Evans</div>
                <div className = "text-lg font-light">Founder & CEO, ClickUp</div>
            </div>
          </div>
        </div>
        <div>
          <img
            alt="clickup-ss"
            src={ClickUpSS}
            className=" w-[470px] h-[480px]"
          />
        </div>
      </div>
    </div>
  );
};

export default ClickUpStory;
