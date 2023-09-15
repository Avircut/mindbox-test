import type { Meta, StoryObj } from '@storybook/react';
import { Code } from './Code';
import AvatarImg from './default.jpg';

const meta = {
  title: 'shared/Code',
  component: Code,
  tags: ['autodocs'],
} satisfies Meta<typeof Code>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    text: 'import type { Meta, StoryObj } from \'@storybook/react\';\n'
    + 'import { Code } from \'./Code\';\n'
    + 'import AvatarImg from \'./default.jpg\';\n'
    + '\n'
    + 'const meta = {\n'
    + '  title: \'shared/Code\',\n'
    + '  component: Code,\n'
    + '  tags: [\'autodocs\'],\n'
    + '} satisfies Meta<typeof Code>;\n'
    + '\n'
    + 'export default meta;\n'
    + 'type Story = StoryObj<typeof meta>;\n',
  },
};

export const Size50px: Story = {
  args: {
    text: 'import type { Meta, StoryObj } from \'@storybook/react\';\n'
    + 'import { Code } from \'./Code\';\n'
    + 'import AvatarImg from \'./default.jpg\';\n'
    + '\n'
    + 'const meta = {\n'
    + '  title: \'shared/Code\',\n'
    + '  component: Code,\n'
    + '  tags: [\'autodocs\'],\n'
    + '} satisfies Meta<typeof Code>;\n'
    + '\n'
    + 'export default meta;\n'
    + 'type Story = StoryObj<typeof meta>;\n',
  },
};
