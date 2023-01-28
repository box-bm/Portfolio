import TechnologiesIDs from "../data/technologiesIDs";

class Technology {
  id: TechnologiesIDs;
  url: string;
  website: string;
  name: string;
  initialDate: Date;
  icon?: string;

  constructor(
    id: TechnologiesIDs,
    url: string,
    website: string,
    name: string,
    initialDate: Date,
    icon?: string
  ) {
    this.id = id;
    this.website = website;
    this.name = name;
    this.url = url;
    this.initialDate = initialDate;
    this.icon = icon;
  }
}

export default Technology;
