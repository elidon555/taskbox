import React, {FunctionComponent} from "react";
import {MantineProvider} from "@mantine/core";

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export const decorators = [
  (Story: FunctionComponent) => (
      <div>
        <div>
          test123
        </div>
      <Story/>
      </div>
  ),
]

export default preview;
