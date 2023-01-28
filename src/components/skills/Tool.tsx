import styled from "styled-components";
import ToolModel from "../../model/tool";
import technologies from "../../data/technologies";

const ToolContainer = styled.div`
  margin-bottom: 20px;

  h2 {
    font-weight: 600;
    font-size: 2rem;
    margin-bottom: 0.8rem;
  }

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
`;

type Props = ToolModel;

const Tool: React.FC<Props> = (props) => {
  const { title, tools, type } = props;
  const toolTechnologies = technologies.filter((technology) =>
    tools.includes(technology.id)
  );
  
  return (
    <ToolContainer>
      <h2>{title}</h2>
      {type === "paragraph" ? (
        <>{toolTechnologies.map((tool) => tool?.name).join(", ")}</>
      ) : (
        <ul>
          {toolTechnologies.map((tool) => (
            <li key={tool?.id + title}>{tool?.name}</li>
          ))}
        </ul>
      )}
    </ToolContainer>
  );
};

export default Tool;
