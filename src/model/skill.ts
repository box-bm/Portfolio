class Skill {
  url: string;
  website: string;
  name: string;
  srcIcon: string;

  constructor(url: string, website: string, name: string, srcIcon: string) {
    this.website = website;
    this.name = name;
    this.url = url;
    this.srcIcon = srcIcon;
  }
}

export default Skill;
