import Technology from "../model/technology";
import TechnologiesIDs from "./technologiesIDs";

const technologies: Technology[] = [
  // Frameworks/libraries
  new Technology(
    TechnologiesIDs.REACT_JS,
    "React",
    new Date(2019, 1, 1),
    "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
  ),
  new Technology(
    TechnologiesIDs.REACT_NATIVE,
    "React Native",
    new Date(2021, 1, 1),
    "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
  ),
  new Technology(
    TechnologiesIDs.NET_CORE,
    ".Net Core",
    new Date(2018, 1, 1),
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/.NET_Core_Logo.svg/1200px-.NET_Core_Logo.svg.png"
  ),
  new Technology(
    TechnologiesIDs.NET_FRAMEWORK,
    ".Net Framework",
    new Date(2017, 1, 1),
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/.NET_Core_Logo.svg/1200px-.NET_Core_Logo.svg.png"
  ),
  new Technology(
    TechnologiesIDs.FLUTTER,
    "Flutter",
    new Date(2022, 1, 1),
    "https://seeklogo.com/images/F/flutter-logo-5086DD11C5-seeklogo.com.png"
  ),
  new Technology(
    TechnologiesIDs.REDUX,
    "Redux",
    new Date(2022, 1, 1),
    "https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png"
  ),
  new Technology(
    TechnologiesIDs.STYLED_COMPONENTS,
    "Styled Components",
    new Date(2022, 1, 1),
    "https://miro.medium.com/max/318/1*7jRD5QhgARucFKvRHFxpOg.png"
  ),
  new Technology(
    TechnologiesIDs.DIESEL,
    "Diesel",
    new Date(2022, 1, 1),
    "https://miro.medium.com/max/318/1*7jRD5QhgARucFKvRHFxpOg.pnghttps://camo.githubusercontent.com/11b15a5cc241167a36f30d2e497182ba9dbef96479ec98b0f0447919a3f4a3c5/68747470733a2f2f64696573656c2e72732f6173736574732f696d616765732f64696573656c5f6c6f676f5f737461636b65645f626c61636b2e706e67"
  ),
  new Technology(
    TechnologiesIDs.ACTIX,
    "Actix",
    new Date(2022, 1, 1),
    "https://actix.rs/img/logo.png"
  ),
  new Technology(
    TechnologiesIDs.ANDROID_JETPACK,
    "Android Jetpack",
    new Date(2022, 1, 1),
    "https://4.bp.blogspot.com/-NnAkV5vpYuw/XNMYF4RtLvI/AAAAAAAAI70/kdgLm3cnTO4FB4rUC0v9smscN3zHJPlLgCLcBGAs/s1600/Jetpack_logo%2B%25282%2529.png"
  ),
  new Technology(
    TechnologiesIDs.SPRING,
    "Spring",
    new Date(2022, 1, 1),
    "https://img.icons8.com/color/480/spring-logo.png"
  ),
  new Technology(
    TechnologiesIDs.GRAPHQL,
    "GraphQL",
    new Date(2022, 1, 1),
    "https://miro.medium.com/max/400/1*nP2C50GK4_-ly_R_mq3juQ.png"
  ),
  new Technology(
    TechnologiesIDs.NODEJS,
    "NodeJS",
    new Date(2018, 1, 1),
    "https://www.ruhidesain.com/wp-content/uploads/2017/10/nodejs-logo-e1497443346889.png"
  ),

  // Programming Languajes
  new Technology(
    TechnologiesIDs.HTML,
    "HTML",
    new Date(2021, 1, 1),
    "https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/23-swift-512.png"
  ),
  new Technology(
    TechnologiesIDs.CSS,
    "CSS",
    new Date(2021, 1, 1),
    "https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/23-swift-512.png"
  ),
  new Technology(
    TechnologiesIDs.SASS,
    "SASS",
    new Date(2021, 1, 1),
    "https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/23-swift-512.png"
  ),
  new Technology(
    TechnologiesIDs.LESS,
    "LESS",
    new Date(2021, 1, 1),
    "https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/23-swift-512.png"
  ),
  new Technology(
    TechnologiesIDs.TYPESCRIPT,
    "TypeScript",
    new Date(2021, 1, 1),
    "https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/23-swift-512.png"
  ),
  new Technology(
    TechnologiesIDs.JAVASCRIPT,
    "Javascript",
    new Date(2021, 1, 1),
    "https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/23-swift-512.png"
  ),
  new Technology(
    TechnologiesIDs.JAVA,
    "JAVA",
    new Date(2021, 1, 1),
    "https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/23-swift-512.png"
  ),
  new Technology(
    TechnologiesIDs.RUST,
    "Rust",
    new Date(2021, 1, 1),
    "https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/23-swift-512.png"
  ),
  new Technology(
    TechnologiesIDs.DART,
    "Dart",
    new Date(2021, 1, 1),
    "https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/23-swift-512.png"
  ),
  new Technology(
    TechnologiesIDs.KOTLIN,
    "Kotlin",
    new Date(2021, 1, 1),
    "https://upload.wikimedia.org/wikipedia/commons/7/74/Kotlin_Icon.png"
  ),
  new Technology(
    TechnologiesIDs.SWIFT,
    "Swift",
    new Date(2021, 1, 1),
    "https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/23-swift-512.png"
  ),
  new Technology(
    TechnologiesIDs.C_SHARP,
    "C#",
    new Date(2021, 1, 1),
    "https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/23-swift-512.png"
  ),
  new Technology(
    TechnologiesIDs.VISUAL_BASIC,
    "VB",
    new Date(2021, 1, 1),
    "https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/23-swift-512.png"
  ),

  // Tools
  new Technology(
    TechnologiesIDs.FIGMA,
    "Figma",
    new Date(2021, 1, 1),
    "https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/23-swift-512.png"
  ),
  new Technology(
    TechnologiesIDs.NOTION,
    "Notion",
    new Date(2021, 1, 1),
    "https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/23-swift-512.png"
  ),
  new Technology(
    TechnologiesIDs.ADOBE_XD,
    "Adobe XD",
    new Date(2021, 1, 1),
    "https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/23-swift-512.png"
  ),
  new Technology(
    TechnologiesIDs.CLICKUP,
    "ClickUp",
    new Date(2021, 1, 1),
    "https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/23-swift-512.png"
  ),
  new Technology(
    TechnologiesIDs.VISUAL_STUDIO,
    "Visual Studio",
    new Date(2021, 1, 1),
    "https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/23-swift-512.png"
  ),
  new Technology(
    TechnologiesIDs.INTELLIJ_IDEA,
    "IntelliJ Idea",
    new Date(2021, 1, 1),
    "https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/23-swift-512.png"
  ),
  new Technology(
    TechnologiesIDs.ANDROID_STUDIO,
    "Android Studio",
    new Date(2021, 1, 1),
    "https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/23-swift-512.png"
  ),
  new Technology(
    TechnologiesIDs.VS_CODE,
    "Visual Studio Code",
    new Date(2021, 1, 1),
    "https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/23-swift-512.png"
  ),

  // GIT
  new Technology(
    TechnologiesIDs.GIT,
    "GIT",
    new Date(2021, 1, 1),
    "https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/23-swift-512.png"
  ),
  new Technology(
    TechnologiesIDs.GITHUB,
    "Github",
    new Date(2021, 1, 1),
    "https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/23-swift-512.png"
  ),
  new Technology(
    TechnologiesIDs.BITBUCKET,
    "BitBucket",
    new Date(2021, 1, 1),
    "https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/23-swift-512.png"
  ),

  // SQL
  new Technology(
    TechnologiesIDs.MSSQL,
    "MSSQL",
    new Date(2021, 1, 1),
    "https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/23-swift-512.png"
  ),
  new Technology(
    TechnologiesIDs.MYSQL,
    "MySQL",
    new Date(2021, 1, 1),
    "https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/23-swift-512.png"
  ),
  new Technology(
    TechnologiesIDs.POSTGRE,
    "PostgreSQL",
    new Date(2021, 1, 1),
    "https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/23-swift-512.png"
  ),
  new Technology(
    TechnologiesIDs.FIREBASE,
    "Firebase",
    new Date(2021, 1, 1),
    "https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/23-swift-512.png"
  ),
];

export default technologies;
