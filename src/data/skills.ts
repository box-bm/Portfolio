import Skill from "../model/skill";
import { UilLaptop, UilServerConnection } from "@iconscout/react-unicons";
import Tool from "../model/tool";
import TechnologiesIDs from "./technologiesIDs";

const skills: Skill[] = [
  new Skill(
    "Frontend Developer",
    "I create experiences in your app, using beatiful design and useful for you.",
    UilLaptop,
    [
      new Tool(
        "Languajes",
        [
          TechnologiesIDs.HTML,
          TechnologiesIDs.CSS,
          TechnologiesIDs.SASS,
          TechnologiesIDs.LESS,
          TechnologiesIDs.TYPESCRIPT,
          TechnologiesIDs.JAVASCRIPT,
          TechnologiesIDs.JAVA,
          TechnologiesIDs.DART,
          TechnologiesIDs.KOTLIN,
          TechnologiesIDs.SWIFT,
        ],
        "paragraph"
      ),
      new Tool(
        "Framworks/Libraries",
        [
          TechnologiesIDs.FLUTTER,
          TechnologiesIDs.REACT_JS,
          TechnologiesIDs.REACT_NATIVE,
          TechnologiesIDs.REDUX,
          TechnologiesIDs.STYLED_COMPONENTS,
        ],
        "paragraph"
      ),
      new Tool("Tools", [
        TechnologiesIDs.ANDROID_STUDIO,
        TechnologiesIDs.VS_CODE,
      ]),
    ]
  ),
  new Skill(
    "Backend Developer",
    "I create fastest and scalable backend services. Do more with less work.",
    UilServerConnection,
    [
      new Tool(
        "Languajes",
        [
          TechnologiesIDs.TYPESCRIPT,
          TechnologiesIDs.JAVASCRIPT,
          TechnologiesIDs.JAVA,
          TechnologiesIDs.C_SHARP,
          TechnologiesIDs.RUST,
        ],
        "paragraph"
      ),
      new Tool("Databases", [
        TechnologiesIDs.FIREBASE,
        TechnologiesIDs.MSSQL,
        TechnologiesIDs.MYSQL,
        TechnologiesIDs.POSTGRE,
      ]),
      new Tool("Tools", [
        TechnologiesIDs.VS_CODE,
        TechnologiesIDs.VISUAL_STUDIO,
        TechnologiesIDs.INTELLIJ_IDEA,
      ]),
    ]
  ),
  new Skill(
    "Organized",
    "Be more organized help me with to be a more efficient on my projects and develop at time.",
    UilServerConnection,
    [
      new Tool(
        "Version control",
        [
          TechnologiesIDs.GITHUB,
          TechnologiesIDs.GIT,
          TechnologiesIDs.BITBUCKET,
        ],
        "paragraph"
      ),
      new Tool("Organized", [TechnologiesIDs.CLICKUP, TechnologiesIDs.NOTION]),
      new Tool("Design", [TechnologiesIDs.FIGMA, TechnologiesIDs.ADOBE_XD]),
    ]
  ),
];

export default skills;
