import { defineWorkspace } from 'vitest/config';
import { storybookTest } from '@storybook/experimental-addon-test/vitest-plugin';


// More info at: https://storybook.js.org/docs/writing-tests/vitest-plugin
export default defineWorkspace([
  'vite.config.ts',
  {
    extends: 'vite.config.ts',
    plugins: [
      // See options at: https://storybook.js.org/docs/writing-tests/vitest-plugin#storybooktest
      storybookTest(),
    ],
    test: {
      globals: true,
      name: 'storybook',
      browser: {
        enabled: true,
        headless: false,
        name: 'chromium',
        provider: 'playwright',
      },
      // Make sure to adjust this pattern to match your stories files.
      include: ['**.stories.js'],
      setupFiles: ['./.storybook/vitest.setup.ts'],
    },
  },
]);