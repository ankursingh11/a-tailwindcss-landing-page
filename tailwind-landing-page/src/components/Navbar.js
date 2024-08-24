import React, { useState } from "react";
import LOGO from "../assets/asset 0.png";
import LOGO_1 from "../assets/asset 1.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [collapsedMenu, setCollapsedMenu] = useState(false);
  function handleClick() {
    setCollapsedMenu(!collapsedMenu);
  }

  return (
    <div>
      <div className="flex sticky w-screen justify-between items-center bg-white shadow-md p-3 cursor-pointer">
        <div className="flex items-center">
          <img alt="logo" src={LOGO} />
          <h3 className="text-lg ml-2">ToDestop</h3>
        </div>
        <div className="lg:flex justify-around content-center text-lg font-semibold cursor-pointer md:hidden sm:hidden">
          <h3 className="mr-5 hover:text-primary">Pricing</h3>
          <h3 className="mx-5 hover:text-primary">Docs</h3>
          <h3 className="mx-5 hover:text-primary">Changelog</h3>
          <h3 className="mx-5 hover:text-primary">Blogs</h3>
          <h3 className="ml-5 hover:text-primary">Login</h3>
        </div>
        <div className="lg:flex items-center text-lg font-semibold border border-gray-400 hover:border-black cursor-pointer rounded-lg p-2 mh:hidden sm:hidden">
          <img
            alt="electron-developers-logo"
            src={LOGO_1}
            className="w-8 h-8 mr-2"
          />
          <h3 className="mx-2">Electron Developers</h3>
          <FontAwesomeIcon icon={faArrowRight} />
        </div>
        <div className="lg:hidden cursor-pointer" onClick={handleClick}>
          {!collapsedMenu ? (
            <FontAwesomeIcon icon={faBars} />
          ) : (
            <FontAwesomeIcon icon={faX} />
          )}
        </div>
      </div>
      {collapsedMenu && (
        <div className="w-screen h-screen absolute bg-white z-10">
          <div className="text-base m-4">
            <h3 className="mt-3 hover:text-primary">Pricing</h3>
            <h3 className="my-3 hover:text-primary">Docs</h3>
            <h3 className="my-3 hover:text-primary">Changelog</h3>
            <h3 className="my-3 hover:text-primary">Blogs</h3>
            <h3 className="mb-3 hover:text-primary">Login</h3>
          </div>
          <hr className="ml-4 w-11/12"></hr>
          <div className="m-4">
            <div className="flex items-center text-lg font-semibold border border-gray-400 hover:border-black cursor-pointer rounded-lg p-2 w-[270px]">
              <img
                alt="electron-developers-logo"
                src={LOGO_1}
                className="w-8 h-8 mr-2"
              />
              <h3 className="mx-2">Electron Developers</h3>
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
