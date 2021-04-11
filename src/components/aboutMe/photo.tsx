import styled from "styled-components";

const Photo = styled.div<{url: string}>`
  height: 300px;
  width: 300px;
  background-color: gray;
  border-radius: 500px;
`;

export default Photo;
