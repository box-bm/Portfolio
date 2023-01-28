import TechnologiesIDs from "../data/technologiesIDs";

class Technology {
  id: TechnologiesIDs;
  name: string;
  initialDate: Date;
  website?: string;

  constructor(
    id: TechnologiesIDs,
    name: string,
    initialDate: Date,
    website?: string,
  ) {
    this.id = id;
    this.website = website;
    this.name = name;
    this.initialDate = initialDate;
  }
}

export default Technology;
