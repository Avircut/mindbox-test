import type { Meta, StoryObj } from '@storybook/react';
import { TodoItem } from './TodoItem';

const meta = {
  title: 'entities/TodoItem',
  component: TodoItem,
  tags: ['autodocs'],
} satisfies Meta<typeof TodoItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
  },
};
