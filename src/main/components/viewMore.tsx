import {faChevronDown} from '@fortawesome/free-solid-svg-icons';
import {FC} from 'react';
import styled, {keyframes} from 'styled-components';
import {fadeInDown} from 'react-animations';
import {Icon} from '../../components';

const Container = styled.div`
  position: absolute;
  bottom: 10px;

  & > div {
    display: flex;
    flex-direction: column;
    align-self: center;
    color: white;
    text-align: center;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    gap: 6px;
    animation: 1s ${keyframes`${fadeInDown}`};
  }

  & > div > p {
    font-size: 1.5rem;
    font-weight: 500;
  }
`;

const ViewMore: FC = () => {
  return (
    <Container>
      <div>
        <p> View More</p>
        <Icon icon={faChevronDown} color="white" />
      </div>
    </Container>
  );
};

export default ViewMore;
