import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { TodoList } from './TodoList';

const meta = {
  title: 'entities/Todo/TodoList',
  component: TodoList,
  tags: ['autodocs'],
} satisfies Meta<typeof TodoList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    todos: [{
      id: '1',
      isCompleted: true,
      title: 'Lorem ipsum dolor sit amet.',
      todos: [],
      userId: '1',
    }],
  },
};
export const PrimaryDark: Story = {
  args: {
    todos: [{
      id: '1',
      isCompleted: true,
      title: 'Lorem ipsum dolor sit amet.',
      todos: [],
      userId: '1',
    }],
  },
  decorators: [
    ThemeDecorator(Theme.DARK),
  ],
};
