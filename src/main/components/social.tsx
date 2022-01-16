import {
  faGithub,
  faLinkedinIn,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import {FC} from 'react';
import styled from 'styled-components';
import {Icon} from '../../components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-top: 10px;
  gap: 15px;

  & > svg:hover {
    cursor: pointer;
  }
`;

const Social: FC = () => {
  return (
    <Container>
      <Icon icon={faTwitter} color="white" size="3x" />
      <Icon icon={faGithub} color="white" size="3x" />
      <Icon icon={faLinkedinIn} color="white" size="3x" />
    </Container>
  );
};

export default Social;
