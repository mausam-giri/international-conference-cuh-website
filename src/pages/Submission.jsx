import React from "react";
import Layout from "./Layout";

import { submissionRequirements } from "../utils/Data";
const SubmissionPage = () => {
  return (
    <div className="s-wrapper px-4 md:px-0 relative">
      <div className="flex flex-col gap-4 card px-4 py-6 justify-center items-center">
        <h2>Requirements for submissions</h2>
        <ul className="list-disc text-justify pl-8 flex flex-col gap-2 mt-2 max-w-[120ch] break-words">
          <li>
            The research papers can be submitted through{" "}
            <a
              style={{ color: "blue" }}
              href="https://cmt3.research.microsoft.com/User/Login?ReturnUrl=%2FICAIOT2023"
            >
              Microsoft CMT : Click here{" "}
              <span style={{ color: "red" }}>(Paper Submission Closed.)</span>
            </a>
          </li>
          <li>All submissions must be in English only.</li>
          <li>
            Authors are requested to submit implementation paper with
            significant contribution (length more than 12 pages) in PDF using
            the LNCS Springer template. NO Review Paper will be accepted.{" "}
            <span style={{ color: "red" }}>(Paper Submission Closed.)</span>
          </li>
          <li>
            Author(s) can refer{" "}
            <a
              style={{ color: "blue" }}
              href="https://resource-cms.springernature.com/springer-cms/rest/v1/content/19242230/data/"
            >
              LNCS, Springer Series Guidelines
            </a>{" "}
            for preparing Camera Ready paper
          </li>
          <li>
            All references, figures, and tables should be numbered in sequence
            starting from 1 and MUST be duly cited / referred within the text.
          </li>
          <li>
            The figures / graphs / plots in the manuscript MUST be of good
            resolution (600 dpi or more), tables MUST NOT be in pictorial
            format.
          </li>
          <li>
            Text in figures should be of equal size as the text of the article.
          </li>
          <li>
            All papers that conform to submission guidelines will be peer
            reviewed and evaluated based on originality, technical and/or
            research content/depth, relevance to conference, contributions, and
            readability.
          </li>
          <li>
            Papers submitted to ICAIoT-2023 should contain original
            research/study and should not have been published or submitted for
            publication elsewhere.
          </li>
          <li>
            Plagiarized submissions will not be accepted and only the author(s)
            is responsible for any plagiarized submission
          </li>
        </ul>
        <a
          href="{submissionRequirements.link}"
          className="mt-6 rounded bg-slate-400 px-4 py-2 hover:bg-slate-500 hover:text-gray-200 transition ease-out duration-300"
        >
          Click here to download template
        </a>
      </div>
    </div>
  );
};

export default function Submission() {
  return <Layout headerText={"SUBMISSION"} children={<SubmissionPage />} />;
}
