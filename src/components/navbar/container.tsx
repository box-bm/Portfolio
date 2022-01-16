import styled from 'styled-components';

export default styled.header`
  display: flex;
  flex-direction: row;
  max-height: 80px;
  min-height: 60px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  align-items: center;
  padding: 0 24px;
  z-index: 1;

  background: ${props => props.theme.colors.blur};
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);

  & > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    color: white;
    gap: 8px;
  }
`;
