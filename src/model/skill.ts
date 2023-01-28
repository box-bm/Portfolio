import React from "react";
import Tool from "./tool";

class Skill {
  title: string;
  descritpion: string;
  color: string;
  icon: React.FC<any>;
  tools: Tool[];

  constructor(
    title: string,
    description: string,
    color: string,
    icon: React.FC<any>,
    tools: Tool[]
  ) {
    this.title = title;
    this.descritpion = description;
    this.color = color;
    this.icon = icon;
    this.tools = tools;
  }
}

export default Skill;
