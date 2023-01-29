import styled from "styled-components";
import ToolModel from "../../model/tool";
import { findTechnologies } from "../../utils/findTechnologies";

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
  const toolTechnologies = findTechnologies(tools);

  return (
    <ToolContainer>
      <h2>{title}</h2>
      {type === "paragraph" ? (
        <span>{toolTechnologies.map((tool) => tool?.name).join(", ")}</span>
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
