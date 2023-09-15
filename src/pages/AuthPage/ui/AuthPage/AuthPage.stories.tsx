import type { Meta, StoryObj } from '@storybook/react';
import AuthPage from './AuthPage';

const meta = {
  title: 'pages/AuthPage',
  component: AuthPage,
  tags: ['autodocs'],
} satisfies Meta<typeof AuthPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
  },
};
