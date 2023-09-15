import type { Meta, StoryObj } from '@storybook/react';
import { Dropdown } from './Dropdown';
import { Button } from '../Button/Button';

const meta = {
  title: 'shared/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    trigger: <Button>Open</Button>,
    items: [
      { content: 'First ывап выап ' },
      { content: 'Second ыва ыва ' },
      { content: 'Third' },
    ],
  },
};
export const DirectionBottomLeft: Story = {
  args: {
    trigger: <Button>Open</Button>,
    items: [
      { content: 'First ывап выап ' },
      { content: 'Second ыва ыва ' },
      { content: 'Third' },
    ],
    direction: 'bottomLeft',
  },
};
export const DirectionBottomRight: Story = {
  args: {
    trigger: <Button>Open</Button>,
    items: [
      { content: 'First ывап выап ' },
      { content: 'Second ыва ыва ' },
      { content: 'Third' },
    ],
    direction: 'bottomRight',
  },
};
export const DirectionTopLeft: Story = {
  args: {
    trigger: <Button>Open</Button>,
    items: [
      { content: 'First ывап выап ' },
      { content: 'Second ыва ыва ' },
      { content: 'Third' },
    ],
    direction: 'topLeft',
  },
};
export const DirectionTopRight: Story = {
  args: {
    trigger: <Button>Open</Button>,
    items: [
      { content: 'First ывап выап ' },
      { content: 'Second ыва ыва ' },
      { content: 'Third' },
    ],
    direction: 'topRight',
  },
};
