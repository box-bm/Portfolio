import "./technologyCard.css";

type Props = {
  text: String;
  description: String;
};

const TechnologyCard: React.FC<Props> = ({ text, description }) => {
  return (
    <div className="TechnologyCard">
      <h1 className="TechnologyCard-title">{text}</h1>
      <h1 className="TechnologyCard-description">{description}</h1>
    </div>
  );
};

export { TechnologyCard };
