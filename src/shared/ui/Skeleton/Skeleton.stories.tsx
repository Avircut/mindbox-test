import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Skeleton } from './Skeleton';

const meta = {
  title: 'shared/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    width: '100%',
    height: 200,
  },
};
export const Circle: Story = {
  args: {
    border: '50%',
    width: 100,
    height: 100,
  },
};
export const NormalDark: Story = {
  args: {
    width: '100%',
    height: 200,
  },
  decorators: [
    ThemeDecorator(Theme.DARK),
  ],
};
export const CircleDark: Story = {
  args: {
    border: '50%',
    width: 100,
    height: 100,
  },
  decorators: [
    ThemeDecorator(Theme.DARK),
  ],
};
