import React from "react";
import PageHeader from "../components/PageHeader";
import { Link } from "react-router-dom";

import { FaUserTie, FaUniversity, FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { contact } from "../utils/Data";

export default function ContactUs() {
  return (
    <div>
      <div className="w-full bg-slate-500">
        <PageHeader text={"Contact Us"} />
      </div>

      <div className="w-full">
        <div className="s-wrapper text-slate-600 pt-10 pb-10">
          <div className="flex justify-around flex-wrap gap-4">
            {contact.map((elem, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col gap-4 shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-4"
                >
                  <div className="flex items-center gap-4">
                    <FaUserTie className="h-8 w-8 p-1 rounded-full border-slate-500 border text-slate-700" />
                    <div>
                      <p>{elem.name}</p>
                      <p>{elem.desig}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <IoMail className="h-8 w-8 p-1 rounded-full border-slate-500 border text-slate-700" />
                    <Link
                      to="/#"
                      onClick={(e) => {
                        window.location.href = `mailto:${elem.email}`;
                        e.preventDefault();
                      }}
                      className="text-slate-800"
                    >
                      {elem.email}
                    </Link>
                  </div>
                  <div className="flex items-center gap-4">
                    <FaPhoneAlt className="h-8 w-8 p-1 rounded-full border-slate-500 border text-slate-700" />
                    <Link
                      to="/#"
                      onClick={(e) => {
                        window.location.href = "tel:0172-2759670";
                        e.preventDefault();
                      }}
                      className="text-slate-800"
                    >
                      {elem.contact[0] + ", " + elem.contact[1]}
                    </Link>
                  </div>
                  <div className="flex justify-center gap-4">
                    <p className="max-w-[60ch]">{elem.loc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
