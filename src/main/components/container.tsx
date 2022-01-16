import styled, {keyframes} from 'styled-components';
import {Container} from '../../components';
import {fadeInDown, fadeIn} from 'react-animations';

export default styled(Container)`
  display: flex;
  flex-direction: column;
  height: calc(100vh + 18px);
  width: 100vw;
  justify-content: center;
  align-items: center;
  background-image: url('https://images.unsplash.com/photo-1515261439133-0f6cfb098e04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  animation: ${keyframes`${fadeIn}`} 1s ease-in-out;

  & > div:first-child {
    width: 100%;
  }

  & > div:first-child > div:first-child {
    animation: 1s ${keyframes`${fadeInDown}`};
    margin: -50px 20px 0px 20px;
    padding: 10px 16px;
    min-width: 200px;
    max-width: 600px;
    width: -webkit-fill-available;
    background: ${props => props.theme.colors.blur};
    backdrop-filter: blur(4px);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 14px;
  }
`;
