import {FC} from 'react';
import {Container, Title, Text, Social, ViewMore} from './components';

const Main: FC = () => {
  return (
    <Container>
      <div>
        <div>
          <Title>
            Hello! I&apos;m <br /> Brandon
          </Title>
          <Text>I&apos;m a Full-Stack Web Developer</Text>
          <Social />
        </div>
      </div>
      <ViewMore />
    </Container>
  );
};

export default Main;
