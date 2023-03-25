import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import SocialMedia from "../models/socialMedia";

const socialMedia: SocialMedia[] = [
  {
    url: "https://github.com/box-bm",
    name: "Github",
    icon: faGithub,
    color: "#000000",
  },
  {
    url: "https://www.linkedin.com/in/bmanzog/",
    name: "LinkedIn",
    icon: faLinkedin,
    color: "#0072b1",
  },
  {
    url: "https://twitter.com/BoxBMG/",
    name: "Twitter",
    icon: faTwitter,
    color: "#00acee",
  },
];

export default socialMedia;
