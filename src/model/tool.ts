import TechnologiesIDs from "../data/technologiesIDs";

type TypeTool = "list" | "paragraph";

class Tool {
  title: string;
  type: TypeTool;
  tools: TechnologiesIDs[];

  constructor(title: string, tools: TechnologiesIDs[], type: TypeTool = "list") {
    this.title = title;
    this.tools = tools;
    this.type = type;
  }
}

export default Tool;
