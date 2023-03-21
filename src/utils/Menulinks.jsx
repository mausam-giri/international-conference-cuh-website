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
      "Advisory Committee",
      "Organising Committee",
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
      "Important Dates",
      "Program Schedule",
      "Proceeding Editors",
    ],
  },
  {
    name: "Conference info",
    link: "conference-info",
    children: ["Conference Venue", "Sponsors", "Contact us"],
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
      "Invited Speakers",
      "Advisory Committee",
      "Organising Committee",
      "Technical Program Committee",
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
      "Venue Info.",
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

import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoTwitter,
} from "react-icons/io5";

export const socialMediaLinks = [
  {
    icon: (props) => <IoLogoFacebook {...props} />,
    name: "facebook",
    link: "/#",
  },
  {
    icon: (props) => <IoLogoTwitter {...props} />,
    name: "twitter",
    link: "/#",
  },
  {
    icon: (props) => <IoLogoInstagram {...props} />,
    name: "instagram",
    link: "/#",
  },
];
