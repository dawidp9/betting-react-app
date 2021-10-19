import { createGlobalStyle } from 'styled-components';
import styledTheme from '@themes/styled_theme';

const GlobalStyle = createGlobalStyle`
    body {
      margin: 0;
      font-family: 'Fira Sans', sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      background: ${styledTheme.colors.white};
    }
    code {
      font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }
`;

export default GlobalStyle;
