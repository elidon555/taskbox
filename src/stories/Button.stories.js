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

// decorator isn't auto applied from preview.tsx, this will fail to render
export const Primary = {
  args: {
    primary: true,
    label: 'Button',
  },
  play: async ({ canvasElement }) => {
  }
};

// decorator imported manually => doesnt fail rendering
export const PrimaryWithForcedDecorator = {
  args: {
    primary: true,
    label: 'Button',
  },
  decorators: decorators,
};
