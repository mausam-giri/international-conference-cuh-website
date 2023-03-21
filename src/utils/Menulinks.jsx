export const menus = [
  {
    name: "HOME",
    link: "/",
  },
  {
    name: "CALL FOR PAPERS",
    link: "call-for-papers",
  },
  {
    name: "committee",
    link: "committee",
    children: [
      "Organising Committee",
      "Advisory Committee",
      "Technical Program Committee",
    ],
  },
  {
    name: "speakers",
    link: "speakers",

    children: ["Invited Speakers"],
  },
  {
    name: "Attending",
    link: "attending",
    children: [
      "Submission",
      "Registration",
      "Proceeding Editors",
      "Important Dates",
      "Program Schedule",
    ],
  },
  {
    name: "Conference info",
    link: "conference-info",
    children: ["Conference venue", "Contact us", "Sponsors"],
  },
  {
    name: "History",
    link: "history",
    children: ["ICCCN-2018", "ICIIL-2019"],
  },
];

export const footerMenus = [
  {
    name: "committee",
    link: "committee",
    children: [
      "Organising Committee",
      "Advisory Committee",
      "Technical Program Committee",
      "Invited Speakers",
    ],
  },
  {
    name: "Attending",
    link: "attending",
    children: [
      "Submission",
      "Registration",

      "Important Dates",
      "Program Schedule",
    ],
  },
  {
    name: "Conference info",
    link: "conference-info",
    children: [
      "Conference venue",
      "Proceeding Editors",
      "Sponsors",
      "Contact us",
    ],
  },
  {
    name: "History",
    link: "history",
    children: ["ICCCN-2018", "ICIIL-2019"],
  },
];

import { IoLogoFacebook, IoLogoInstagram, IoLogoTwitter } from "react-icons/io5";
export const socialMediaLinks = [
  {
    icon: IoLogoFacebook,
    name: "facebook",
    link: "/#",
  },
  {
    icon: IoLogoTwitter,
    name: "twitter",
    link: "/#",
  },
  {
    icon: IoLogoInstagram,
    name: "instagram",
    link: "/#",
  },
];