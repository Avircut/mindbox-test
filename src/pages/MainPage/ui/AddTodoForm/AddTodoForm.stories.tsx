import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator/StoreDecorator';
import AddTodoForm from './AddTodoForm';

const meta = {
  title: 'pages/MainPage/AddTodoForm',
  component: AddTodoForm,
  tags: ['autodocs'],
  decorators: [
    StoreDecorator({ user: { authData: { id: '1' } } }),
  ],
} satisfies Meta<typeof AddTodoForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
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
