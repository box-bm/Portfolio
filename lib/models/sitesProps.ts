import Site from "./site";
import SocialMedia from "./socialMedia";

export default interface SitesProps {
  externalSites: Site[];
  sites: Site[];
  socialMedia: SocialMedia[];
}
