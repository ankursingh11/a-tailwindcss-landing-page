import React from "react";
import { faCheck, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PlanCard = ({ title, desc, pricing, prompted }) => {
  return (
    <div className="bg-slate-50 rounded-lg p-7 flex flex-col w-[400px] text-xl gap-5 font-light">
      {prompted && (
        <label className="absolute text-blue-800 bg-indigo-100 p-2 rounded-xl w-[140px] right-[0.5rem] -top-5 font-semibold">
          Most Popular
        </label>
      )}
      <div className="font-semibold text-3xl mb-5">{title}</div>
      <div>{desc}</div>
      {pricing && (
        <div className="font-semibold">
          {pricing}
          <span className="font-light">/month</span>
        </div>
      )}
      <div className="font-semibold">KEY FEATURES</div>
      <ul>
        <li>
          <FontAwesomeIcon icon={faCheck} className="mr-4" />
          Free for personal use
        </li>
        <li>
          <FontAwesomeIcon icon={faCheck} className="mr-4" />
          Free for personal use
        </li>
        <li>
          <FontAwesomeIcon icon={faX} className="mr-4" />
          Free for personal use
        </li>
        <li>
          <FontAwesomeIcon icon={faX} className="mr-4" />
          Free for personal use
        </li>
      </ul>
      <div
        className={
          "text-center border rounded-xl py-1 font-semibold " +
          (!prompted
            ? "text-blue-600 border-gray-300"
            : "bg-blue-600 text-white")
        }
      >
        Read Docs
      </div>
    </div>
  );
};

export default PlanCard;
