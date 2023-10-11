import { ThemeProvider } from 'styled-components';

import { Routes } from './presentation/routes';
import { defaultTheme } from './presentation/styles';

export const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Routes />
    </ThemeProvider>
  );
};
