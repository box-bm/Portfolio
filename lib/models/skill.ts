import { IconDefinition } from "@fortawesome/fontawesome-common-types";
import SkillSubCategory from "./skillSubCategory";

interface Skill<T> {
  title: string;
  description: string;
  icon: IconDefinition;
  subCategories: SkillSubCategory<T>[];
}

export default Skill;
