import { userEvent, within, expect, fn } from '@storybook/test';
import { Button } from '../components/Button.jsx';
import {decorators} from "/.storybook/preview";
import {test} from "vitest";

export default {
  title: 'Example/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: { onClick: fn() },
};

// decorator isn't auto applied from preview.tsx
export const Primary = {
  args: {
    primary: true,
    label: 'Button',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('test123')).not.toBeNull();
  }
};

// decorator imported manually => however imagine doing this for every component
// not convenient
export const PrimaryWithForcedDecorator = {
  args: {
    primary: true,
    label: 'Button',
  },
  decorators: decorators,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('test123')).not.toBeNull();
  }
};
