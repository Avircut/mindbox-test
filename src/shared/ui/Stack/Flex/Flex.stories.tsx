import type { Meta, StoryObj } from '@storybook/react';
import { Flex } from './Flex';

const meta = {
  title: 'shared/Flex',
  component: Flex,
  tags: ['autodocs'],
} satisfies Meta<typeof Flex>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Row: Story = {
  args: {
    children: (
      <>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
      </>
    ),
  },
};

export const Column: Story = {
  args: {
    children: (
      <>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
      </>
    ),
    direction: 'column',
  },
};
export const alignCenter: Story = {
  args: {
    children: (
      <>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
      </>
    ),
    align: 'center',
  },
};

export const alignStretch: Story = {
  args: {
    children: (
      <>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
      </>
    ),
    align: 'stretch',
  },
};

export const alignEnd: Story = {
  args: {
    children: (
      <>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
      </>
    ),
    align: 'end',
  },
};
export const justifyCenter: Story = {
  args: {
    children: (
      <>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
      </>
    ),
    justify: 'center',
  },
};

export const justifyBetween: Story = {
  args: {
    children: (
      <>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
      </>
    ),
    justify: 'between',
  },
};

export const gap8: Story = {
  args: {
    children: (
      <>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
      </>
    ),
    gap: '8',
  },
};
export const gap16: Story = {
  args: {
    children: (
      <>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
      </>
    ),
    gap: '16',
  },
};

export const gap32: Story = {
  args: {
    children: (
      <>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
      </>
    ),
    gap: '32',
  },
};
