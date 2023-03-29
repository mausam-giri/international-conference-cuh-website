import React from "react";
import { Link } from "react-router-dom";

import cuhLogo from "../assets/cuhlogo.png";
import { footerMenus, socialMediaLinks } from "../utils/Menulinks";
import { IoLogoFacebook, IoLogoInstagram, IoLogoLinkedin, IoLogoTwitter } from "react-icons/io5";
import SocialButton from "./SocialButton";

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-b from-slate-500 to-slate-600 mt-6 pt-9 rounded-t-2xl">
      <div className="mx-auto s-wrapper p-0 px-4 md:p-2">
        <div className="md:flex md:justify-between md:px-0">
          <div className="mb-6 flex flex-col items-center gap-4 md:mb-0">
            <Link
              to="/"
              className="flex items-center flex-wrap justify-start text-center sm:justify-center"
            >
              <img
                src={nitttrLogo}
                className="h-9 mr-3"
                alt="NITTTR Chandigarh"
              />
              <span className="self-center text-white text-xl font-semibold whitespace-pre-wrap dark:text-white">
                NITTTR Chandigarh
              </span>
            </Link>
            <p className="md:max-w-[24ch] text-slate-300 text-center">
              A leading resource institute for promoting excellence in technical
              education system.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-2 sm:gap-6 sm:grid-cols-4">
            {footerMenus &&
              footerMenus.map((menu, i) => {
                return (
                  <div key={i}>
                    <h2 className="uppercase text-gray-200 mb-6 text-sm font-semibold">
                      {menu.name}
                    </h2>
                    <ul className="text-gray-400">
                      {menu.children &&
                        menu.children.map((elem, j) => {
                          let elem_link = elem
                            .toLowerCase()
                            .trim()
                            .replace(" ", "-");
                          return (
                     
                              <li
                                key={j}
                                className="mb-2 whitespace-nowrap text-ellipsis overflow-hidden"
                              >
                                <Link
                                  to={elem_link}
                                  className="hover:underline hover:text-gray-200 "
                                >
                                  {elem}
                                </Link>
                              </li>
                        
                          );
                        })}
                    </ul>
                  </div>
                );
              })}
          </div>
        </div>
        <hr className="my-6 border-slate-700 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-300 sm:text-center">
            © 2023{" "}
            <Link to="/" className="hover:underline">
              Central University of Haryana
            </Link>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0 pb-2">
            <SocialButton>
              <IoLogoFacebook className="h-6 w-6 text-slate-900 hover:text-slate-400" />
            </SocialButton>
            <SocialButton>
              <IoLogoTwitter className="h-6 w-6 text-slate-900 hover:text-slate-400" />
            </SocialButton>
            <SocialButton>
              <IoLogoInstagram className="h-6 w-6 text-slate-900 hover:text-slate-400" />
            </SocialButton>
            <SocialButton>
              <IoLogoLinkedin className="h-6 w-6 text-slate-900 hover:text-slate-400" />
            </SocialButton>
          </div>
        </div>
      </div>
    </footer>
  );
}
