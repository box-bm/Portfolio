import { sites } from "./data/sites";
import socialMedia from "./data/socialMedia";
import SitesProps from "./models/navbarProps";
import Site from "./models/site";

export function getSites(): SitesProps {
  const externalSites: Site[] = socialMedia
    .filter(({ code }) => ["github", "blog"].includes(code))
    .map(({ name, url, icon }) => ({ name, path: url, icon }));

  return {
    externalSites,
    sites,
    socialMedia: socialMedia.map(({ name, url, icon }) => ({
      name,
      path: url,
      icon,
    })),
  };
}
