import React from "react";
import Tool from "./tool";

class Skill {
  title: string;
  descritpion: string;
  icon: React.FC<any>;
  tools: Tool[];

  constructor(
    title: string,
    description: string,
    icon: React.FC<any>,
    tools: Tool[]
  ) {
    this.title = title;
    this.descritpion = description;
    this.icon = icon;
    this.tools = tools;
  }
}

export default Skill;
