import Project from "../model/project";
import TechnologiesIDs from "./technologiesIDs";

const projects: Project[] = [
  new Project(
    "DPI Validator",
    "A DPI validator. This validate and return values of department and municipality by DPI",
    "https://pub.dev/packages/dpi_validator",
    "https://github.com/box-bm/dpi_validator",
    [TechnologiesIDs.DART]
  ),
  new Project(
    "NIT Validator",
    "A simple tool for offline check nit number, this use an simple algorithm to check if this is ok and returns a boolean according to the input.",
    "https://pub.dev/packages/nit_validator",
    "https://github.com/box-bm/nit_validator",
    [TechnologiesIDs.DART]
  ),
];

export default projects;
