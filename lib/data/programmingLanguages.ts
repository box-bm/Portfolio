import moment from "moment";
import ProgrammingLanguage from "../models/programmingLanguage";

const programmingLanguages: ProgrammingLanguage[] = [
  {
    code: "dart",
    icon: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Dart-logo.png",
    startDate: moment([2022]),
    title: "Dart",
    description:
      "I have experience building apps with flutter and dart, i launch 3 differents proyects with this programming language and it's my second favorite language.",
  },
  {
    code: "typescript",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png",
    startDate: moment([2019]),
    title: "Typescript",
    description:
      '"The Javascript with estheroids", for me, it\'s the most powerful programming language over Javascript. I learn Typescript for build more complicated systems efficiently.',
  },
  {
    code: "Javascript",
    icon: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    startDate: moment([2017]),
    title: "Javascript",
    description:
      "I love build apps with Javascript, it's flexible and have a lot of ways to use in any platform",
  },
  {
    code: "Java",
    icon: "https://cdn.freebiesupply.com/logos/thumbs/2x/java-4-logo.png",
    startDate: moment([2018]),
    title: "Java",
    description:
      "Java it's a great tool for build backend services. I made systems with this and I like it because it is such an object-focused programming, it simplifies programming and makes it more understandable",
  },
  {
    code: "Kotlin",
    icon: "https://upload.wikimedia.org/wikipedia/commons/7/74/Kotlin_Icon.png",
    startDate: moment([2021]),
    title: "Kotlin",
    description:
      "A great programming language with more tools than Java, I love kotlin because we can build apps for android, complicated but before understanding kotlin, everything is easy.",
  },
  {
    code: "Swift",
    icon: "https://assets.stickpng.com/images/58482ce4cef1014c0b5e4a4c.png",
    startDate: moment([2021]),
    title: "Swift",
    description:
      "Swift for build whatever for apple in each platform. It's like flutter but with more tools and only for Apple ecosystem.",
  },
  {
    code: "Rust",
    icon: "https://brandslogos.com/wp-content/uploads/images/large/rust-logo.png",
    startDate: moment([2022]),
    title: "Rust",
    description:
      "My favorite programming language for backend what I ever use. Maybe rust will be the standar, I think. But you can write complicated system and rust resumes that project with high performance and low cost for your services.",
  },
  {
    code: "CSharp",
    icon: "https://seeklogo.com/images/C/c-sharp-c-logo-02F17714BA-seeklogo.com.png",
    startDate: moment([2016]),
    title: "C#",
    description:
      "My second programming language what I learned. It's easy to use and we can build a lot of applications. All my jobs require C# because in Guatemala love C# and microsoft envyroment.",
  },
];

export default programmingLanguages;
