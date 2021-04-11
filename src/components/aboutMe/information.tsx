import { FunctionComponent } from "react";
import styled from "styled-components";

const Title = styled.div`
  font-weight: bold;
  font-size: 80px;
  margin: 0;
`;

const Position = styled.div`
  font-size: 50px;
  color: ${(props) => props.theme.colors.primary};
`;

const Description = styled.div`
  color: black;
`;

const Information: FunctionComponent = () => (
  <>
    <Title>Brandon Manzo</Title>
    <Position>FullStack Developer</Position>
    <Description>
      Soy un desarrollador FullStack en Guatemala. Me encanta todo lo
      relacionado al software, noticias, actualizaciones e innovaciones. Mas que
      un trabajo es mi pasión por lo que hago.
    </Description>
  </>
);

export default Information;
