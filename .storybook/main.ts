/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  staticDirs: ["../public"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/experimental-addon-test",
    'storybook-addon-mantine',
    'storybook-addon-remix-react-router',
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
};
export default config;
