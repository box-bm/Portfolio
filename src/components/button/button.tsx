import { IconName, IconPrefix } from "@fortawesome/fontawesome-svg-core";
import { ButtonHTMLAttributes, FunctionComponent } from "react";
import styled from "styled-components";
import { StyledProps } from "../../models/styledProps";
import { Icon } from "../icons";

interface IStyleProps {
  block?: boolean;
  bgColor?: "primary" | "secondary" | string;
  color?: "primary" | "secondary" | string;
}

interface IProps extends StyledProps, ButtonHTMLAttributes<HTMLButtonElement> {
  iconName?: IconName;
  iconPrefix?: IconPrefix;
}

type Props = IProps;

const Button: FunctionComponent<Props> = (props) => {
  const { iconName, iconPrefix, className, children } = props;
  return (
    <button {...props} className={className}>
      {iconName && (
        <Icon iconName={iconName} prefix={iconPrefix} className="button-icon" />
      )}
      {typeof children === "string" ? (
        <span className="button-text">{children}</span>
      ) : (
        <div>{children}</div>
      )}
    </button>
  );
};

const StyledButton = styled(Button)<IStyleProps>`
  width: ${({ block }) => (block ? "100%" : "auto")};
  background-color: ${({ bgColor }) => {
    if (bgColor) return bgColor;
    else return "inherit";
  }};
  padding: 10px 20px;
  color: ${({ color }) => {
    if (color) return color;
    else return "inherit";
  }};
  border-radius: 10px;
  border-width: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: filter 100ms ease;
  cursor: pointer;

  &:active {
    filter: brightness(0.8) !important;
  }

  &:hover{
    filter: brightness(0.9)
  }

  .button-icon {
    margin-right: 10px;
    font-size: 18px;
  }

  .button-text {
    font-size: 20px;
    font-weight: 600;
  }
`;

export default StyledButton;
