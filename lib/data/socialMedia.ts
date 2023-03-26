import {
  faGithub,
  faLinkedin,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import SocialMedia from "../models/socialMedia";

const socialMedia: SocialMedia[] = [
  {
    code: "github",
    url: "https://github.com/box-bm",
    name: "Github",
    icon: faGithub,
    color: "#000000",
  },
  {
    code: "linkedin",
    url: "https://www.linkedin.com/in/bmanzog/",
    name: "LinkedIn",
    icon: faLinkedin,
    color: "#0072b1",
  },
  {
    code: "twitter",
    url: "https://twitter.com/BoxBMG/",
    name: "Twitter",
    icon: faTwitter,
    color: "#00acee",
  },
  {
    code: "instagram",
    url: "https://www.instagram.com/bgmanzo/",
    name: "Instagram",
    icon: faInstagram,
    color: "#4c68d7",
    hideOnHeading: true,
  },
];

export default socialMedia;
