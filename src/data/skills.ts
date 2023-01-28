import Skill from "../model/skill";
import {
  UilLaptop,
  UilServerConnection,
} from "@iconscout/react-unicons";
import Tool from "../model/tool";
import TechnologiesIDs from "./technologiesIDs";

const skills: Skill[] = [
  new Skill(
    "Frontend Developer",
    "It's my favorite part of development because is the face or first line of a business",
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
        TechnologiesIDs.FIGMA,
        TechnologiesIDs.ADOBE_XD,
        TechnologiesIDs.ANDROID_STUDIO,
        TechnologiesIDs.VS_CODE,
      ]),
    ]
  ),
  new Skill(
    "Backend Developer",
    "Backend it's interesting",
    UilServerConnection,
    [
      new Tool(
        "Languajes",
        [
          TechnologiesIDs.NODEJS,
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
];

export default skills;
