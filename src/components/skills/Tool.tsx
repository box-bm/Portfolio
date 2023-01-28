import styled from "styled-components";
import ToolModel from "../../model/tool";
import technologies from "../../data/technologies";

const ToolContainer = styled.div``;

type Props = ToolModel;

const Tool: React.FC<Props> = (props) => {
  const { title, tools, type } = props;
  const toolTechnologies = technologies.filter((value) =>
    tools.includes(value.id)
  );

  return (
    <ToolContainer>
      <div>{title}</div>
      {type === "list" ? (
        <></>
      ) : (
        <ul>
          {toolTechnologies.map((tool) => (
            <li key={tool.id + title}>{tool.name}</li>
          ))}
        </ul>
      )}
    </ToolContainer>
  );
};

export default Tool;
