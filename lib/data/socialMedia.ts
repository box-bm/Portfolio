import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import SocialMedia from "../models/socialMedia";

const socialMedia: SocialMedia[] = [
  {
    url: "",
    name: "Github",
    icon: faGithub,
    color: "black",
  },
  {
    url: "https://www.linkedin.com/in/bmanzog/",
    name: "LinkedIn",
    icon: faLinkedin,
    color: "#0072b1",
  },
  {
    url: "https://www.linkedin.com/in/bmanzog/",
    name: "Twitter",
    icon: faTwitter,
    color: "#00acee",
  },
];

export default socialMedia;
