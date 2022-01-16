interface ISkill {
  name: string;
  description: string;
  proyects: {
    name: string;
    description: string;
  }[];
}

export default ISkill;
