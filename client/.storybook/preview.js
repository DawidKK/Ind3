import React from "react";
import { addDecorator } from '@storybook/react';
import { ThemeProvider } from "styled-components";
import { theme } from '../src/containers/Layout';

addDecorator(storyFn => <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>)

const customViewports = {
  '4K': {
    name: '4K',
    styles: {
      width: '3840px',
      height: '2160px',
    },
  },
  fullHD: {
    name: 'fullHD',
    styles: {
      width: '533px',
      height: '801px',
    },
  },
}

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  viewport: { viewports: customViewports }
}
