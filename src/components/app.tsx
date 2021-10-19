import { ThemeProvider } from 'styled-components';
import GlobalStyle from '@themes/global_style';
import styledTheme from '@themes/styled_theme';
import Router from '@router/router';

const App: React.FC = () => {
  return (
    <>
      <ThemeProvider theme={styledTheme}>
        <Router />
      </ThemeProvider>
      <GlobalStyle />
    </>
  );
};

export default App;
