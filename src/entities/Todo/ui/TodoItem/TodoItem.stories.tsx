import type { Meta, StoryObj } from '@storybook/react';
import { TodoItem } from './TodoItem';

const meta = {
  title: 'entities/Todo/TodoItem',
  component: TodoItem,
  tags: ['autodocs'],
} satisfies Meta<typeof TodoItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    todo: {
      id: '1',
      isCompleted: false,
      title: 'Lorem ipsum dolor sit amet.',
      userId: '1',
    },
  },
};

export const Completed: Story = {
  args: {
    todo: {
      id: '1',
      isCompleted: true,
      title: 'Lorem ipsum dolor sit amet.',
      userId: '1',
    },
  },
};
export const Parent: Story = {
  args: {
    todo: {
      id: '1',
      isCompleted: false,
      title: 'Lorem ipsum dolor sit amet.',
      userId: '1',
      todos: [
        {
          id: '2',
          isCompleted: false,
          title: 'Lorem ipsum dolor sit amet.',
          userId: '1',
        },
        {
          id: '3',
          isCompleted: false,
          title: 'Lorem ipsum dolors sit amet.',
          userId: '1',
        },
      ],
    },
  },
};
