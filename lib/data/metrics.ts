import moment from "moment";

const metrics = [
  {
    number: `${moment().diff([2018], "years")} +`,
    title: "Years working",
    description: "As a software developer",
    showHome: true,
  },
  {
    number: "3",
    title: "Mobile apps",
    description: "Developed and designed for me",
    showHome: true,
  },
  {
    number: "10+",
    title: "Websites",
    description: "Builded with backend and frontend",
    showHome: true,
  },
];

export default metrics;
