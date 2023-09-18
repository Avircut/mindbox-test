/* eslint-disable max-len */
import type { Preview } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { initialize, mswLoader } from 'msw-storybook-addon';
import { StyleDecorator } from '../../src/shared/config/storybook/decorators/StyleDecorator/StyleDecorator';
import { ThemeDecorator } from '../../src/shared/config/storybook/decorators/ThemeDecorator/ThemeDecorator';
import { RouterDecorator } from '../../src/shared/config/storybook/decorators/RouterDecorator/RouterDecorator';
import { msw } from './mockHandlers';

initialize({ onUnhandledRequest: 'bypass' });

const preview: Preview = {
  decorators: [
    RouterDecorator, StyleDecorator, ThemeDecorator(Theme.LIGHT),
  ],
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    msw,
  },
  loaders: [mswLoader],
};

export default preview;
