import type { Meta, StoryObj } from '@storybook/react';
import { Listbox } from './ListBox';

const meta = {
  title: 'shared/Listbox',
  component: Listbox,
  tags: ['autodocs'],
  decorators: [
    (Story) => <div style={{ padding: 100 }}><Story /></div>,
  ],
} satisfies Meta<typeof Listbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    defaultValue: 'Default',
    items: [
      { value: '1', content: 'First ывап выап ' },
      { value: '2', content: 'Second ыва ыва ' },
      { value: '3', content: 'Third' },
    ],
  },
};

export const DirectionTopLeft: Story = {
  args: {
    defaultValue: 'Default',
    items: [
      { value: '1', content: 'First ывап выап ' },
      { value: '2', content: 'Second ыва ыва ' },
      { value: '3', content: 'Third' },
    ],
    direction: 'topLeft',
  },
};
export const DirectionTopRight: Story = {
  args: {
    defaultValue: 'Default',
    items: [
      { value: '1', content: 'First ывап выап ' },
      { value: '2', content: 'Second ыва ыва ' },
      { value: '3', content: 'Third' },
    ],
    direction: 'topRight',
  },
};
export const DirectionBottomLeft: Story = {
  args: {
    defaultValue: 'Default',
    items: [
      { value: '1', content: 'First ывап выап ' },
      { value: '2', content: 'Second ыва ыва ' },
      { value: '3', content: 'Third' },
    ],
    direction: 'bottomLeft',
  },
};

export const DirectionBottomRight: Story = {
  args: {
    defaultValue: 'Default',
    items: [
      { value: '1', content: 'First ывап выап ' },
      { value: '2', content: 'Second ыва ыва ' },
      { value: '3', content: 'Third' },
    ],
    direction: 'bottomRight',
  },
};

export const Disabled: Story = {
  args: {
    readonly: true,
    defaultValue: 'Default',
    items: [
      { value: '1', content: 'First ывап выап ' },
      { value: '2', content: 'Second ыва ыва ' },
      { value: '3', content: 'Third' },
    ],
  },
};
export const WithLabel: Story = {
  args: {
    label: 'Label',
    defaultValue: 'Default',
    items: [
      { value: '1', content: 'First ывап выап ' },
      { value: '2', content: 'Second ыва ыва ' },
      { value: '3', content: 'Third' },
    ],
  },
};
