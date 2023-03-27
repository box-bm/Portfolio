import {
  faGithub,
  faLinkedin,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import SocialMedia from "../models/socialMedia";
import { faBlog } from "@fortawesome/free-solid-svg-icons";

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
    code: "instagram",
    url: "https://www.instagram.com/bgmanzo/",
    name: "Instagram",
    icon: faInstagram,
    color: "#fa7e1e",
    hideOnHeading: true,
  },
  {
    code: "twitter",
    url: "https://twitter.com/BoxBMG/",
    name: "Twitter",
    icon: faTwitter,
    color: "#00acee",
  },
  {
    code: "blog",
    url: "https://brandonmanzo.notion.site/Box_BM-Guides-and-Blog-f5f66c6df5444b66b1aa4274168ce189",
    name: "Guides",
    icon: faBlog,
    color: "#20a1b1",
    hideOnHeading: true,
  },
];

export default socialMedia;
