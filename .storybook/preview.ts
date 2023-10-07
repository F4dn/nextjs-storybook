import type { Preview } from "@storybook/react";
import * as NextImage from 'next/image';

const OrignalNextImage = NextImage.default;

Object.defineProperty(NextImage , "default" , {
  configurable : true,
  value : (props) => <OrignalNextImage {...props} unoptimised />,
})

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
