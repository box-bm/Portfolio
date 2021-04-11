import {
  findIconDefinition,
  IconDefinition,
  IconLookup,
  IconName,
  IconPrefix,
  library,
  SizeProp,
} from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FunctionComponent } from "react";
import styled from "styled-components";
import { StyledProps } from "../../models/styledProps";

library.add(fas, far, fab);

interface IProps extends StyledProps {
  iconName: IconName;
  prefix?: IconPrefix;
  size?: SizeProp;
}

type Props = IProps;

const Icon: FunctionComponent<Props> = ({
  iconName,
  prefix,
  size,
  className,
}: Props) => {
  const lookup: IconLookup = { prefix: prefix || "fas", iconName };
  const definition: IconDefinition = findIconDefinition(lookup);

  return (
    <FontAwesomeIcon
      icon={definition}
      className={className}
      size={size || "lg"}
    />
  );
};

const StyledIcon = styled(Icon)`
  color: inherit;
`;

export default StyledIcon;
