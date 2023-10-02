import type { Meta, StoryObj } from '@storybook/react';
import { AddRow } from './AddRow';

const meta = {
  title: 'features/AddRow',
  component: AddRow,
  tags: ['autodocs'],
} satisfies Meta<typeof AddRow>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
  },
};