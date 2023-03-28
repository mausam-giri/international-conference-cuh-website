import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import PageHeader from "../../components/PageHeader";

import technicalComData from "../../utils/committee_data/technical_com.json";

export default function ComLayout({ headetText, children }) {
  const url = useLocation();
  const [pathname, setPathname] = useState(
    url.pathname.split("/")[1].split("-")[0]
  );

  const CommitteCard = ({ data }) => {
    return (
      <div>
        {data &&
          data.map((x, i) => {
            return <div key={i}>{x["name"]}</div>;
          })}
      </div>
    );
  };

  const Committe = ({ path }) => {
    switch (path) {
      case "advisory":
        return <CommitteCard data={technicalComData} />;
      default:
        return null;
    }
  };

  const header = ({ path }) => {};

  return (
    <div>
      <div className="bg-slate-500 w-full ">
        <PageHeader text={headetText} />
      </div>
      <div className="w-full py-[2rem] text-slate-700">
        <Committe path={pathname} />
      </div>
    </div>
  );
}
