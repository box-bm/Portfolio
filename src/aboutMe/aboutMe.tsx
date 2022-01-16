import {FC, useEffect, useState} from 'react';
import {Link} from '../components';
import {Container, Text, Title} from './components';
import {isMobile} from 'react-device-detect';

const AboutMe: FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => setIsExpanded(!isExpanded);

  useEffect(() => {
    if (!isMobile) {
      setIsExpanded(true);
    }
  }, []);

  return (
    <Container>
      <Title>About Me</Title>
      <Text>
        Hello, my name is Brandon, I live in Guatemala and I am 22 years old. I
        am a software developer and i love my job because it is a great way to
        learn new things and to be creative. I love to code and i am very
        passionate about it.
      </Text>
      {isExpanded && (
        <>
          <Text>
            I am a very motivated person and I love to learn new things. I am a
            very good team player and I am always ready to create new proyects
            or help others. I am a very hardworking person. I am always learning
            new things and I am always trying to improve my skills because i
            want to be mobile developer to create next generations applications
            for the future.
          </Text>
          <Text>
            I am a fullstack developer because on 2018 I started learning web
            development with .Net Framework on my first job, then I moved to
            Node.js and React.js and managed databases with SQL Server and now I
            am working with React.js with typescript and create web APIs. That
            is the reason why I am fullstack developer and I have a little
            experience with React Native and Flutter.
          </Text>
          <Text>I’m really exited present my work throughout my career.</Text>
        </>
      )}
      {isMobile && (
        <Link onClick={toggleExpanded}>
          {!isExpanded ? 'View more' : 'View Less'}
        </Link>
      )}
    </Container>
  );
};

export default AboutMe;
