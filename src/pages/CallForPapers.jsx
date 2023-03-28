import React from "react";

import { callForPapers } from "../utils/Data"; 
import cof from "../assets/cof.jpg"
import {IoIosPaper} from 'react-icons/io';
import PageHeader from "../components/PageHeader";

export default function CallForPapers() {
  return (
    <div>
      <div className="bg-slate-500 w-full ">
        <PageHeader text={'CALL FOR PAPERS'} />
      </div>
      <div className="w-full py-[2rem] text-slate-700">
        <div className="s-wrapper px-4 md:px-0">
          <div className="grid grid-cols-1 gap-4 mb-4 md:grid-cols-3">
            <div className="text-justify col-span-2 font-sanchez">
              <p className="mb-4">
                2nd International Conference on Communication, Computing &
                Networking (ICCCN-2018) will provide an excellent international
                forum for sharing knowledge and results in theory, methodology
                and applications of Computer Networks & Information Technology.
                The Conference looks for significant contributions to the
                Computer Networks & Communications for Wired and Wireless
                Networks in theoretical and practical aspects. Original papers
                are invited on Computer Networks, Network Protocols and Wireless
                Networks, Data Communication Technologies, Network Security,
                Cyber Security, Cyber Crime and Forensic Tools, Web
                Architectures, Biometrics, Software Engineering, Cloud Computing
                etc. The aim of the conference is to provide a platform to the
                researchers and practitioners from both academia as well as
                industry to meet and share cutting-edge development in the
                field.
              </p>
              <p className="text-rose-600 font-semibold">
                "The proceedings of the conference will be published in Lecture
                Notes in Network and Systems, Springer. The proceeding of the
                conference will be submitted for indexing to ISI Proceedings,
                MetaPress, Springerlink and Scopus."
              </p>
            </div>
            <div className="hidden md:block">
              <img src={cof} alt="" className="" />
            </div>
          </div>

          <div className="mt-6 font-sanchez">
            <h2 className="text-xl text-slate-900">Topics of Interest</h2>
            <span className="font-sanchez">
              These are the areas of interest for paper acceptance but not
              limited to:
            </span>
            <div className="grid grid-cols-1 gap-x-4 gap-y-2 mt-4 pl-4 md:grid-cols-2">
              {callForPapers &&
                callForPapers.map((paper, index) => {
                  return (
                    <div
                      className="col-span-1 hover:bg-slate-300 py-1 px-2 rounded cursor-default"
                      key={index}
                    >
                      <IoIosPaper className="inline mr-2" />
                      {paper}
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
