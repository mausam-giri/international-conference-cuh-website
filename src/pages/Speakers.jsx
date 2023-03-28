import React from "react";
import Layout from "./Layout";

import invitedSpeakers from "../utils/invited_speakers.json";

// name;
// university;
// talk;
// cv_link;
// image;

const Speaker = () => {
  return (
    <div className="s-wrapper px-4 md:px-0 relative">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 flex-wrap items-center justify-center">
        {invitedSpeakers.members &&
          invitedSpeakers.members.map((speaker, index) => {
            return (
              <div
                className="flex flex-col text-center items-center gap-4 card p-2"
                key={index}
              >
                <div className="">
                  <img
                    src={`../src/assets/${speaker["image"]}`}
                    className="rounded border-2 border-gray-400 object-fill max-w-[160px]"
                    alt="invited speakers"
                  />
                </div>
                <div className=" flex flex-col items-center break-words">
                  <span className="font-bold">{speaker["name"]}</span>
                  <span>
                    {speaker["university"] &&
                      speaker["university"].map((x, i) => {
                        return <p key={i}>{x}</p>;
                      })}
                  </span>
                  <span className="font-semibold">{speaker["talk"]}</span>
                  <button className="mt-2 px-4 py-2 bg-slate-400 border border-gray-400 rounded shadow hover:bg-slate-500 transition duration-500 ease-out">
                    Brief CV
                  </button>
                </div>
              </div>
            );
          })}
      </div>
      {/* <div className="absolute h-full w-full top-0">
        <object
          id="doc"
          type="application/pdf"
          data="https://fdp.nitttrchd.ac.in/icaiot2023/downloads/Prof.%20Math%20Bollen_CV.docx.pdf"
          width="100%"
          height="100%"
        ></object>
        <div className="absolute top-16 right-4 text-white flex items-center justify-center rounded-full font-bold z-10 w-4 h-4 bg-red-500 cursor-pointer hover:bg-red-400 select-none">
          X
        </div>
      </div> */}
    </div>
  );
};

export default function Speakers() {
  return <Layout children={<Speaker />} headerText="SPEAKERS" />;
}
