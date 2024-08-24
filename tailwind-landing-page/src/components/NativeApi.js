import React from "react";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Icon1 from "../assets/asset 47.png";
import Icon2 from "../assets/asset 48.jpeg";

const NativeApi = () => {
  return (
    <div className="flex flex-col bg-gray-100 p-5 gap-4 rounded-2xl hover:hover:bg-gradient-to-br from-red-50 via-purple-50 to-yellow-50">
      <div className="flex gap-3 justify-left">
        <FontAwesomeIcon
          icon={faCode}
          className="bg-indigo-100 p-2 rounded-full text-xl"
        />
        <h1 className = "text-3xl">Native APIs</h1>
      </div>
      <div className = "my-5">
        <p className = "font-light text-lg">
          What sets ToDesktop apart is its seamless integration with native APIs
          using our existing web codebase. By tapping into APIs like Tray and
          Notifications, we've crafted an exceptionally polished desktop user
          experience.
        </p>
      </div>
      <div className="flex">
        <img src={Icon1} className = "w-12 h-12 rounded-full"/>
        <img src={Icon2} className = "w-11 h-11 rounded-full relative -left-4 top-0.5"/>
        <div className = "text-base">
          <h3>Rick Pastoor</h3>
          <h3 className = "text-gray-500 dont-light hover:underline">Rise</h3>
        </div>
      </div>
    </div>
  );
};

export default NativeApi;
