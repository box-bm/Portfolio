import {ThemeProvider} from 'styled-components';
import {AboutMe} from './aboutMe';
import {Navbar, Main as Body} from './components';
import {Main} from './main';
import {ThemeDark, ThemeDefault} from './themes';
import useSystemTheme from './hooks/useSystemTheme';
import {Skills} from './skills';

function App() {
  const isDarkMode = useSystemTheme();

  return (
    <ThemeProvider theme={!isDarkMode ? ThemeDark : ThemeDefault}>
      <Navbar />
      <Body>
        <Main />
        <AboutMe />
        <Skills />
      </Body>
    </ThemeProvider>
  );
}

export default App;
