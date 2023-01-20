import styled from "styled-components";

interface Props {
  url: string;
}

const Photo = styled.img<Props>`
  content: url(${(props) => props.url});
  border-radius: 100%;
  width: 100%;
  max-width: 350px;
  min-width: 260px;
`;

export default Photo;
