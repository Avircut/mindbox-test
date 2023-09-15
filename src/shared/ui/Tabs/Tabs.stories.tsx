import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Tabs } from './Tabs';

const meta = {
  title: 'shared/Tabs',
  component: Tabs,
  tags: ['autodocs'],
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    tabs: [
      { content: 'Tab 1', value: 'tab 1' },
      { content: 'Tab 2', value: 'tab 2' },
      { content: 'Tab 3', value: 'tab 3' },
    ],
    value: 'tab 1',
    onTabClick: action('onTabClick'),
  },
};
