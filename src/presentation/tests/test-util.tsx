import { ThemeProvider } from 'styled-components/native';
import { render, RenderOptions } from '@testing-library/react-native';

import { defaultTheme } from '../styles';

const customRender = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) =>
  render(ui, {
    wrapper: ({ children }) => (
      <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>
    ),
    ...options
  });

export { customRender as render };
