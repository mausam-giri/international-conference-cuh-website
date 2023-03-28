import React from "react";
import PageHeader from "../components/PageHeader";

export default function Layout({ headerText, children }) {
  return (
    <div>
      <div className="bg-slate-500 w-full ">
        <PageHeader text={headerText} />
      </div>
      <div className="w-full py-[2rem] text-slate-700">
        {children}
      </div>
    </div>
  );
}
