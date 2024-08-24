import React from "react";
import WorkImage from "../assets/asset 66.svg";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const WorkComponent = ({step}) => {
  return (
    <div className="border border-gray-300 rounded-xl flex justify-between p-4 my-[50px]">
      <div className="flex flex-col content-center pl-5">
        <div className="bg-yellow-50 border-2 border-yellow-300 px-2 py-1 rounded-xl text-base text-yellow-700 w-[75px]">
          Step {step}
        </div>

        <div className="my-4 max-w-[500px]">
          <div className="text-4xl">Bootstrap straight from your web app</div>
          <div className="text-base font-light my-3">
            Copy and paste your web app url into ToDesktop. Customise your app
            design, app icon and window frame UI with no code.
          </div>
          <div className="grid grid-cols-2 text-lg">
            <div>
              <p className="my-3 underline underline-offset-4 decoration-0 hover:decoration-1">
                <FontAwesomeIcon icon={faCheck} className="mr-2" />
                Multiple Windows
              </p>
              <p className="my-3 underline underline-offset-4 decoration-0 hover:decoration-1">
                <FontAwesomeIcon icon={faCheck} className="mr-2" />
                Multiple Windows
              </p>
              <p className="my-3 underline underline-offset-4 decoration-0 hover:decoration-1">
                <FontAwesomeIcon icon={faCheck} className="mr-2" />
                Multiple Windows
              </p>
            </div>
            <div>
              <p className="my-3 underline underline-offset-4 decoration-0 hover:decoration-1">
                <FontAwesomeIcon icon={faCheck} className="mr-2" />
                Multiple Windows
              </p>
              <p className="my-3 underline underline-offset-4 decoration-0 hover:decoration-1">
                <FontAwesomeIcon icon={faCheck} className="mr-2" />
                Multiple Windows
              </p>
              <p className="my-3 underline underline-offset-4 decoration-0 hover:decoration-1">
                <FontAwesomeIcon icon={faCheck} className="mr-2" />
                Multiple Windows
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <img alt="work" src={WorkImage} className="pr-7" />
      </div>
    </div>
  );
};

export default WorkComponent;
