import React, {FunctionComponent} from "react";

console.log('asdasdasdasdasdasdasdasdsadasdas');
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
