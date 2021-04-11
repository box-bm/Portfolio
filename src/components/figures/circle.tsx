import styled from "styled-components";

const StyledCircle = styled.div<{
  height: string;
  width: string;
  position?: { top?: string; bottom?: string; left?: string; right?: string };
  color?: "primary" | "secondary" | string;
}>`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  background-color: ${(props) => {
    if (props.color) {
      if (props.color === "primary") return props.theme.colors.primary;
      else if (props.color === "secondary") return props.theme.colors.secondary;
      else return props.color;
    } else return "inherit";
  }};
  border-radius: 500px;
  z-index: -1;
  position: fixed;
  ${({ position }) => position?.top && `top: ${position.top}`};
  ${({ position }) => position?.bottom && `bottom: ${position.bottom}`};
  ${({ position }) => position?.left && `left: ${position.left}`};
  ${({ position }) => position?.right && `right: ${position.right}`};
`;

export default StyledCircle;
