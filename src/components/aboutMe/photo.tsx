import styled from "styled-components";

const Photo = styled.div<{ url: string }>`
  max-height: 300px;
  max-width: 300px;
  width: 20rem;
  height: 20rem;
  background-color: gray;
  border-radius: 500px;
`;

export default Photo;
