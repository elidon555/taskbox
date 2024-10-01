import { test } from 'vitest';
// 👉 Using Next.js? Import from @storybook/nextjs instead
import { composeStories } from '@storybook/react';
import * as stories from './Button.stories';

const { Primary, PrimaryWithForcedDecorator } = composeStories(stories);

test('renders primary button with default args', async () => {
  // await Primary.run();
  await PrimaryWithForcedDecorator.run();
  // await new Promise((resolve) => setTimeout(resolve, 50000));
  // const buttonElement = screen.getByText('Text coming from args in stories file!');
  // expect(buttonElement).not.toBeNull();
});
