import styled from "styled-components";

const AppBarContainer = styled.header`
  top: 0px;
  width: 100vw;
  position: fixed;
  background-color: ${(props) => props.theme.card.backgroundColor};
  box-shadow: 0px 0px 10px #161616;
  display: flex;
  justify-content: center;
  padding: 10px 20px;

  ul {
    display: flex;
    list-style-type: none;
    gap: 10px;
  }
`;

const AppBar: React.FC = () => {
  return (
    <AppBarContainer>
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#aboutMe">About Me</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#projects">Project</a>
        </li>
      </ul>
    </AppBarContainer>
  );
};

export default AppBar;
