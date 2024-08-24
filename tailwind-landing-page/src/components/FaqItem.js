import React, { useState } from "react";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FaqItem = ({ title, desc }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="bg-gray-100 border border-gray-300 p-5 text-xl font-light rounded-xl">
      <div className="flex justify-between">
        <div className="font-semibold">{title}</div>
        <div onClick={() => setShow((show) => !show)} className = "cursor-pointer">
          {!show ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />}
        </div>
      </div>

      {show && <div className="mt-2">{desc}</div>}
    </div>
  );
};

export default FaqItem;
