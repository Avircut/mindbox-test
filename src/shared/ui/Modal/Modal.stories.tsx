import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Modal } from './Modal';

const meta = {
  title: 'shared/Modal',
  component: Modal,
  tags: ['autodocs'],
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    isOpen: true,
    children: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus nemo corrupti libero enim ut in exercitationem sed alias facilis, similique odio nobis sequi consectetur facere nisi deserunt id eaque. Facilis.',
  },
};
export const PrimaryDark: Story = {
  args: {
    isOpen: true,
    children: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus nemo corrupti libero enim ut in exercitationem sed alias facilis, similique odio nobis sequi consectetur facere nisi deserunt id eaque. Facilis.',
  },
  decorators: [
    ThemeDecorator(Theme.DARK),
  ],
};
