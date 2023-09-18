import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import AuthPage from './AuthPage';

const meta = {
  title: 'pages/AuthPage',
  component: AuthPage,
  tags: ['autodocs'],
  decorators: [
    StoreDecorator({}),
  ],
} satisfies Meta<typeof AuthPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
  },
};
export const Dark: Story = {
  args: {
  },
  decorators: [
    ThemeDecorator(Theme.DARK),
  ],
};
