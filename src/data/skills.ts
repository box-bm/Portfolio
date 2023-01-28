import Skill from "../model/skill";
import {
  UilDesktop,
  UilServerConnection,
  UilMobileAndroid,
} from "@iconscout/react-unicons";
import Tool from "../model/tool";
import TechnologiesIDs from "./technologiesIDs";

const skills: Skill[] = [
  new Skill(
    "Frontend Developer",
    "It's my favorite part of development because is the face or first line of a business",
    "#53a053",
    UilDesktop,
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
    "#a65252",
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
  new Skill("Organized", "", "#4343c0", UilMobileAndroid, []),
];

export default skills;
