import styled from "styled-components";

const Card = styled.div`
  background-color: ${(props) => props.theme.card.backgroundColor};
  border-radius: ${(props) => props.theme.card.borderRaius};
  padding: 16px 18px;
  transition: all 0.3s ease;
`;

export { Card };
