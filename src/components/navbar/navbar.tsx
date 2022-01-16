import {faBox} from '@fortawesome/free-solid-svg-icons';
import {FC} from 'react';
import Icon from '../icon';
import Container from './container';
import Name from './name';

interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => {
  return (
    <Container>
      <div>
        <Icon icon={faBox} size="2x" color="white" />
        <Name>BoxBM</Name>
      </div>
    </Container>
  );
};

export default Navbar;
