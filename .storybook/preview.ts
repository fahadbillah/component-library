import type { Preview } from '@storybook/react';
import '../src/styles/index.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'app-canvas',
      values: [
        { name: 'app-canvas', value: '#F4FBFA' },
        { name: 'surface-white', value: '#FFFFFF' },
        { name: 'deep-slate', value: '#0F172A' },
      ],
    },
  },
};

export default preview;
