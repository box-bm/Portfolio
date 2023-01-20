import React from "react";

class SocialMedia {
  url: string;
  name: string;
  icon: React.FC;
  color: string;
  darkColor: string;

  constructor(
    url: string,
    name: string,
    icon: React.FC,
    color: string,
    darkColor?: string
  ) {
    this.name = name;
    this.url = url;
    this.icon = icon;
    this.color = color;
    this.darkColor = darkColor ?? color;
  }
}

export default SocialMedia;
