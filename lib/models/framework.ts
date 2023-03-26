import { IconDefinition } from "@fortawesome/fontawesome-common-types";
import { Moment } from "moment";

interface Framework {
  code: string;
  title: string;
  startDate: Moment;
  description?: string;
  icon: IconDefinition | string;
}

export default Framework;
