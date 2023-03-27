import moment from "moment";
import Framework from "../models/framework";

const frameworks: Framework[] = [
  {
    code: "nextjs",
    icon: "https://seeklogo.com/images/N/next-js-logo-8FCFF51DD2-seeklogo.com.png",
    startDate: moment([2022]),
    title: "NextJS",
    description: "",
  },
  {
    code: "flutter",
    icon: "https://img.icons8.com/fluency/512/flutter.png",
    startDate: moment([2021]),
    title: "Flutter",
    description: "",
  },
  {
    code: "react",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
    startDate: moment([2018]),
    title: "React JS",
    description: "",
  },
  {
    code: "reactNative",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
    startDate: moment([2020]),
    title: "React Native",
    description: "",
  },
  {
    code: "NetCore",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/.NET_Core_Logo.svg/2048px-.NET_Core_Logo.svg.png",
    startDate: moment([2021]),
    title: ".Net Core",
    description: "",
  },
  {
    code: "Express",
    icon: "https://w7.pngwing.com/pngs/925/447/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo.png",
    startDate: moment([2018]),
    title: "Express",
    description: "",
  },
  {
    code: "Spring",
    icon: "https://cdn.freebiesupply.com/logos/large/2x/spring-3-logo-png-transparent.png",
    startDate: moment([2022]),
    title: "Spring",
    description: "",
  },
];

export default frameworks;
