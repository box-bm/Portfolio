import SocialMedia from "../model/social";

import {
  UilTwitterAlt,
  UilLinkedinAlt,
  UilGithubAlt,
} from "@iconscout/react-unicons";

const socialMedia: SocialMedia[] = [
  new SocialMedia(
    "https://www.linkedin.com/in/bmanzog/",
    "LinkedIn",
    UilLinkedinAlt,
    "#0A66C2",
    "#79bcff"
  ),
  new SocialMedia(
    "https://twitter.com/BoxBMG",
    "Twitter",
    UilTwitterAlt,
    "#1DA1F2"
  ),
  new SocialMedia(
    "https://github.com/box-bm/",
    "Github",
    UilGithubAlt,
    "#000000",
    "#ffffff"
  ),
];

export default socialMedia;
