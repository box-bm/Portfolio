import moment from "moment";
import Tool from "../models/tool";

const tools: Tool[] = [
  {
    code: "vscode",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png",
    startDate: moment([2018]),
    title: "Visual Studio Code",
    description: "",
  },
  {
    code: "visualStudio",
    icon: "https://1000logos.net/wp-content/uploads/2020/08/Visual-Studio-Logo.png",
    startDate: moment([2016]),
    title: "Visual Studio",
    description: "",
  },
  {
    code: "androidStudio",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Android_Studio_Icon_3.6.svg/1900px-Android_Studio_Icon_3.6.svg.png",
    startDate: moment([2021]),
    title: "Android Studio",
    description: "",
  },
  {
    code: "xcode",
    icon: "https://upload.wikimedia.org/wikipedia/en/5/56/Xcode_14_icon.png",
    startDate: moment([2021]),
    title: "XCode",
    description: "",
  },
  {
    code: "Postman",
    icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/postman-icon.png",
    startDate: moment([2018]),
    title: "Postman",
    description: "",
  },
  {
    code: "Figma",
    icon: "https://cdn.freebiesupply.com/logos/large/2x/figma-1-logo-png-transparent.png",
    startDate: moment([2020]),
    title: "Figma",
    description: "",
  },
];

export default tools;
