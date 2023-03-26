import moment from "moment";
import Metric from "../models/metric";

const metrics: Metric[] = [
  {
    number: `${moment().diff([2018], "years")} +`,
    title: "Years working",
    description: "As a software developer",
    showHome: true,
  },
  {
    number: "3",
    title: "Mobile Apps",
    description: "Developed and deployed",
    showHome: true,
  },
  {
    number: "12+",
    title: "Websites",
    description: "Builded working",
    showHome: true,
  },
  {
    number: "100%",
    title: "Efficient",
    description: "Working at time",
    showHome: false,
  },
  {
    number: "10",
    title: "Designs",
    description: "Beatifuls and clean",
    showHome: false,
  },
];

export default metrics;
