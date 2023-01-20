import styled from "styled-components";

interface Props {
  url: string;
}

const TechnologyImage = styled.img<Props>`
  content: url(${(props) => props.url});
  width: 100%;
`;

export default TechnologyImage;
