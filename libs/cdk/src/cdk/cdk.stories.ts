import type { Meta, StoryObj } from '@storybook/angular';
import { Cdk } from './cdk';
import { expect } from 'storybook/test';

const meta: Meta<Cdk> = {
  component: Cdk,
  title: 'Cdk',
};
export default meta;

type Story = StoryObj<Cdk>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/cdk/gi)).toBeTruthy();
  },
};
