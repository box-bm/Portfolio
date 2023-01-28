import Technology from "../model/technology";
import TechnologiesIDs from "./technologiesIDs";

const technologies: Technology[] = [
  new Technology(
    TechnologiesIDs.REACT_JS,
    "/technology/react",
    "https://flutter.dev",
    "React",
    new Date(2019, 1, 1),
    "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
  ),
  new Technology(
    TechnologiesIDs.NET_CORE,
    "/technology/net_core",
    "https://flutter.dev",
    ".Net Core",
    new Date(2018, 1, 1),
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/.NET_Core_Logo.svg/1200px-.NET_Core_Logo.svg.png"
  ),
  new Technology(
    TechnologiesIDs.NODEJS,
    "/technology/flutter",
    "https://flutter.dev",
    "NodeJS",
    new Date(2018, 1, 1),
    "https://www.ruhidesain.com/wp-content/uploads/2017/10/nodejs-logo-e1497443346889.png"
  ),
  new Technology(
    TechnologiesIDs.SPRING,
    "/technology/spring",
    "https://flutter.dev",
    "Spring",
    new Date(2022, 1, 1),
    "https://img.icons8.com/color/480/spring-logo.png"
  ),
  new Technology(
    TechnologiesIDs.FLUTTER,
    "/technology/flutter",
    "https://flutter.dev",
    "Flutter",
    new Date(2022, 1, 1),
    "https://seeklogo.com/images/F/flutter-logo-5086DD11C5-seeklogo.com.png"
  ),
  new Technology(
    TechnologiesIDs.SWIFT,
    "/technology/swift",
    "https://flutter.dev",
    "Swift",
    new Date(2021, 1, 1),
    "https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/23-swift-512.png"
  ),
  new Technology(
    TechnologiesIDs.KOTLIN,
    "/technology/kotlin",
    "https://flutter.dev",
    "Kotlin",
    new Date(2021, 1, 1),
    "https://upload.wikimedia.org/wikipedia/commons/7/74/Kotlin_Icon.png"
  ),
  new Technology(
    TechnologiesIDs.REACT_NATIVE,
    "/technology/reactNative",
    "https://flutter.dev",
    "React Native",
    new Date(2021, 1, 1),
    "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
  ),
];

export default technologies;
