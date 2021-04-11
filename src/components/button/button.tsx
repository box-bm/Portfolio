import { IconName, IconPrefix } from "@fortawesome/fontawesome-svg-core";
import { FunctionComponent } from "react";
import styled from "styled-components";
import { StyledProps } from "../../models/styledProps";
import { Icon } from "../icons";

interface IProps extends StyledProps {
  iconName?: IconName;
  iconPrefix?: IconPrefix;
}

type Props = IProps;

const Button: FunctionComponent<Props> = ({
  iconName,
  iconPrefix,
  className,
  children,
}) => (
  <button className={className}>
    {iconName && <Icon iconName={iconName} prefix={iconPrefix} size="2x" />}
    {typeof children === "string" ? (
      <span className="button-text">{children}</span>
    ) : (
      { children }
    )}
  </button>
);

interface IStyleProps {
  block?: boolean;
  bgColor?: "primary" | "secondary" | string;
  color?: "primary" | "secondary" | string;
}

const StyledButton = styled(Button)<IStyleProps>`
  width: ${({ block }) => (block ? "100%" : "auto")};
  background-color: ${({ bgColor }) => {
    if (bgColor) return bgColor;
    else return "inherit";
  }};
  padding: 20px 40px;
  color: ${({ color }) => {
    if (color) return color;
    else return "inherit";
  }};
  border-radius: 20px;
  border-width: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  transition: all 500ms ease;
  opacity: 0.9;

  &:hover {
    box-shadow: 0px 8px 16px 2px rgba(212, 212, 212, 1);
    opacity: 1;
  }

  &:active {
    box-shadow: 0px 0px 0px 0px rgba(212, 212, 212, 1);
    opacity: 1;
  }

  .button-text {
    font-size: 30px;
    font-weight: bold;
  }
`;

export default StyledButton;
