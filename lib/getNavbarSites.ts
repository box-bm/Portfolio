import { sites } from "./data/sites";
import socialMedia from "./data/socialMedia";
import NavbarProps from "./models/navbarProps";
import Site from "./models/site";

export function getNavbarSites(): NavbarProps {
  const externalSites: Site[] = socialMedia
    .filter(({ code }) => ["github", "blog"].includes(code))
    .map(({ name, url, icon }) => ({ name, path: url, icon }));

  return {
    externalSites,
    sites,
  };
}
