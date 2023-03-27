import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface SocialMedia {
  code: string;
  url: string;
  name: string;
  icon: IconDefinition;
  color: string;
  hideOnHeading?: boolean;
}

export default SocialMedia;
