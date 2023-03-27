import { IconDefinition } from "@fortawesome/fontawesome-common-types";

interface SkillSubCategory<T> {
  title: string;
  icon?: IconDefinition;
  description?: string;
  tools: T[];
}

export default SkillSubCategory;