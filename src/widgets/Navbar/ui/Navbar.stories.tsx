import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator/StoreDecorator';
import { Navbar } from './Navbar';

const meta = {
  title: 'widget/Navbar',
  component: Navbar,
  tags: ['autodocs'],
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
  },
  decorators: [
    StoreDecorator({ user: { authData: { id: '1', username: 'Avircut' } } }),
  ],
};
export const Dark: Story = {
  args: {
  },
  decorators: [
    StoreDecorator({ user: { authData: { id: '1', username: 'Avircut' } } }),
    ThemeDecorator(Theme.DARK),
  ],
};
