import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  IoMenuOutline,
  IoChevronDown,
  IoPaperPlane,
  IoCloseOutline,
} from "react-icons/io5";
import nitttrLogo from "../assets/nitttr-logo.png";

import { menus } from "../utils/Menulinks";

export default function Navbar() {

  const [navOpen, setNavOpen] = useState(false);

  return (
    <>
      <nav
        aria-label="primary"
        className="relative shadow-none select-none sm:shadow-md z-20 mb-0"
      >
        <div className="w-full max-w-[1200px] m-auto relative shadow-md sm:shadow-none pb-5 md:pb-10">
          {/* Brand Logo & Content top section*/}
          <div className="w-full flex justify-between items-center py-2 px-2 sm:px-0">
            <Link to="/" className="flex gap-2">
              <img src={nitttrLogo} className="h-14" alt="ITTTR Chandingarh" />
              <div className="flex flex-col justify-center">
                <span className="text-xl font-bold">NITTTR </span>
                <span className="font-bold">Chandigarh</span>
              </div>
            </Link>
            <div className="flex gap-2 items-center">
              <IoPaperPlane className={"text-rose-500 h-[24px] w-[24px]"} />
              <div className="flex flex-col">
                <span className="font-bold mb-0">Email Us</span>
                <Link
                  to="/#"
                  onClick={(e) => {
                    window.location.href = "mailto:someone@example.com";
                    e.preventDefault();
                  }}
                  className="hover:underline"
                >
                  someone@example.com
                </Link>
              </div>
            </div>
          </div>
          <div className="m-auto w-full p-0 absolute items-center justify-center hidden lg:p-3 md:flex">
            <div className="flex flex-wrap justify-center items-center gap-1 bg-gradient-to-b from-gray-400 to-gray-500 rounded shadow-lg py-1 px-1">
              {menus.map((menu) => {
                return (
                  <div className="relative group" key={menu.link}>
                    <Link
                      to={menu.link}
                      className="whitespace-wrap overflow-hidden text-ellipsis py-1 px-2 flex items-center gap-1 uppercase w-fit hover:bg-gray-600 rounded text-red-200 md:text-gray-200 lg:px-3 lg:py-2"
                    >
                      {menu.name}
                      {/* <span className="whitespace-wrap overflow-hidden text-ellipsis">
                          {menu.name}
                        </span> */}
                      {menu.children && <IoChevronDown />}
                    </Link>
                    {menu.children && (
                      <div className="absolute hidden z-10 min-w-[250px]  group-hover:flex bg-transparent">
                        <div className="flex flex-col mt-2 px-1 py-2 pb-3 shadow-lg rounded bg-gradient-to-b from-gray-400 to-gray-500">
                          {menu.children.map((elem) => {
                            let elem_link = elem
                              .toLowerCase()
                              .replace(" ", "-");
                            return (
                              <Link
                                key={elem_link}
                                to={elem_link}
                                className="text-gray-200 px-2 py-2 rounded hover:bg-gray-600"
                              >
                                <span>{elem}</span>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="absolute top-[70%] flex w-full justify-center md:hidden">
            <div
              className="z-20 h-[48px] w-[48px] bg-slate-200 rounded-full p-2 cursor-pointer text-slate-800 shadow-lg"
              onClick={(e) => {
                e.preventDefault();
                setNavOpen(!navOpen);
              }}
            >
              {navOpen ? (
                <IoCloseOutline className="h-[100%] w-[100%]" />
                ) : (
                <IoMenuOutline className="h-[100%] w-[100%]" />
              )}
            </div>
          </div>
          <div
            className="absolute z-10 px-0 w-full top-[105%] h-[auto] ease-in duration-1000"
            style={{ display: navOpen ? "block" : "none" }}
          >
            <div className="flex flex-col px-2 pt-5 pb-4 rounded shadow bg-slate-500">
              {menus.map((menu) => {
                return (
                  <>
                    <div key={menu.link} className="relative group">
                      <Link
                        to={menu.link}
                        key={menu.link}
                        className="p-2 w-full flex items-center gap-1 text-gray-200 rounded uppercase hover:bg-slate-600"
                      >
                        {menu.name}
                        {menu.children && <IoChevronDown />}
                      </Link>

                      {menu.children && (
                        <div className="hidden px-2 pt-2 pb-4 bg-slate-600 rounded group-hover:flex">
                          <div className="w-full flex flex-col gap-1">
                            {menu.children.map((elem) => {
                              let elem_link = elem
                                .toLowerCase()
                                .replace(" ", "-");
                              return (
                                <Link
                                  key={elem_link}
                                  className="text-gray-200 px-2 py-2 rounded hover:bg-slate-700"
                                >
                                  <span>{elem}</span>
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </div>
                  </>
                );
              })}
            </div>
          </div>
          {/*  */}
        </div>
      </nav>
    </>
  );
}
