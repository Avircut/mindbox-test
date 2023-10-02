import { StoryFn } from '@storybook/react';
import { Theme, ThemeProvider } from '@mui/material';

export const ThemeDecorator = (theme: Theme) => (Story: StoryFn) => (
  <ThemeProvider theme={theme}>
    <Story />
  </ThemeProvider>

);
