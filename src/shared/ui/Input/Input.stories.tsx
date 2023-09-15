import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Input } from './Input';

const meta = {
  title: 'shared/Input',
  component: Input,
  tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    placeholder: 'Type Text',
    value: '123123',
  },
};
export const PrimaryDark: Story = {
  args: {
    placeholder: 'Type Text',
    value: '123123',
  },
  decorators: [
    ThemeDecorator(Theme.DARK),
  ],
};
