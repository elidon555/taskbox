import React, {FunctionComponent} from "react";
import {Box, MantineProvider, Paper} from "@mantine/core";

const preview: import('@storybook/react').Preview = {
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
  (Story) => (
      <MantineProvider>
          <Paper>
            <Box pos="relative">
              <Story/>
            </Box>
          </Paper>
      </MantineProvider>
  ),
]

export default preview;
