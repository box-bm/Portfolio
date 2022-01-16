import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome';
import {FC} from 'react';
import {useTheme} from 'styled-components';

interface IconProps {}

type Props = IconProps & FontAwesomeIconProps;

const Icon: FC<Props> = props => {
  const theme: any = useTheme();
  return <FontAwesomeIcon color={theme.colors.text} {...props} />;
};

export default Icon;
