import styled from "styled-components";

const StyledCube = styled.div<{
  dimensions: { height: string; width?: string };
  xyPosition?: { top?: string; bottom?: string; left?: string; right?: string };
  color?: "primary" | "secondary" | "info" | string;
}>`
  height: ${({ dimensions }) => dimensions.height};
  width: ${({ dimensions }) => dimensions.width || dimensions.height};
  background-color: ${(props) => {
    if (props.color) {
      if (props.color === "primary") return props.theme.colors.primary;
      else if (props.color === "secondary") return props.theme.colors.secondary;
      else if (props.color === "info") return props.theme.colors.info;
      else return props.color;
    } else return "inherit";
  }};
  ${({ xyPosition }) => xyPosition?.top && `top: ${xyPosition.top}`};
  ${({ xyPosition }) => xyPosition?.bottom && `bottom: ${xyPosition.bottom}`};
  ${({ xyPosition }) => xyPosition?.left && `left: ${xyPosition.left}`};
  ${({ xyPosition }) => xyPosition?.right && `right: ${xyPosition.right}`};
`;

export default StyledCube;
