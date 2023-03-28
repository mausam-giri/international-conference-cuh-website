import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import PageHeader from "../../components/PageHeader";

import technicalComData from "../../utils/committee_data/technical_com.json";
import organizingCommitteData from "../../utils/committee_data/organising_com.json";
import professorLogo from "../../assets/professor.png";

const CommitteMember = ({ data: x }) => {
  return (
    <div className="flex flex-col w-[35ch] px-4 py-6 border border-gray-300 rounded-lg shadow bg-slate-300 text-sm">
      <div className="flex gap-4">
        <div className="max-w-[30px] pt-1">
          <img
            src={professorLogo}
            className="w-full rounded-xl"
            alt="Professor Logo"
          />
        </div>
        <div>
          <p>
            <span className="font-semibold">{x["name"]}</span>, {x["job"]}
          </p>
          <p>{x["dept"]}</p>
        </div>
      </div>
      <div>
        <p>
          {x["univ"]}, {x["loc"]}
        </p>
      </div>
    </div>
  );
};

const CommitteHeader = ({ label }) => {
  return (
    <div className="w-full my-4 bg-slate-400 text-white text-lg uppercase py-2 px-4 rounded shadow border-gray-200 border tracking-wider font-semibold">
      {label}
    </div>
  );
};

const CommitteCard = ({ data }) => {
  const [startIndex, setStartIndex] = useState(16);

  return (
    <div className="s-wrapper px-4 md:px-0">
      {data.isCategory ? (
        Object.keys(data.categories).map((cat, catI) => {
          const mems = data[cat];
          const label = data.categories[cat];
          return (
            <div key={catI}>
              <CommitteHeader label={label} />
              <div className="flex flex-wrap justify-center gap-4">
                {mems.map((m, i) => {
                  return <CommitteMember key={m + i} data={m} />;
                })}
              </div>
            </div>
          );
        })
      ) : (
        <div className="flex gap-4 flex-col justify-center items-center">
          <div className="flex flex-wrap justify-center gap-4">
            {data.members &&
              data.members.slice(0, startIndex).map((x, i) => {
                return <CommitteMember key={i} data={x} />;
              })}
          </div>
          {startIndex < data.members.length && (
            <button
              className="py-2 px-4 border-gray-200 border rounded-md shadow bg-slate-300 text-black uppercase hover:bg-slate-700 hover:text-gray-200 transition ease-in duration-300"
              onClick={(e) => {
                setStartIndex((prevStartIndex) => prevStartIndex + 16);
              }}
            >
              Load More
            </button>
          )}
        </div>
      )}
    </div>
  );
};

const Committe = ({ path, setPageHeaderText }) => {
  switch (path) {
    case "advisory":
      setPageHeaderText("ADVISORY COMMITTEE");
      return <CommitteCard data={technicalComData} />;

    case "organising":
      setPageHeaderText("ORGANISING COMMITTEE");
      return <CommitteCard data={organizingCommitteData} />;

    case "technical":
      setPageHeaderText("TECHNICAL PROGRAM COMMITTEE");
      return <CommitteCard data={technicalComData} />;

    default:
      return null;
  }
};

export default function ComLayout({ headetText, children }) {
  const url = useLocation();
  const pathname = url.pathname.split("/")[1].split("-")[0];
  const [pageHeaderText, setPageHeaderText] = useState("");

  return (
    <div>
      <div className="bg-slate-500 w-full ">
        <PageHeader text={pageHeaderText} />
      </div>
      <div className="w-full py-[2rem] text-slate-700">
        <Committe path={pathname} setPageHeaderText={setPageHeaderText} />
      </div>
    </div>
  );
}
