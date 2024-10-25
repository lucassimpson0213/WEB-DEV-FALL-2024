import { createTamagui } from 'tamagui';

const config = createTamagui({
  fonts: {
    heading: {
      family: 'Arial',
      size: {
        small: 14,
        medium: 16,
        large: 20,
      },
    },
  },
  themes: {
    light: {
      background: '#FFFFFF',
      color: '#000000',
    },
    dark: {
      background: '#000000',
      color: '#FFFFFF',
    },
  },
  shorthands: {
    bg: 'backgroundColor',
    fg: 'color',
  },
});

export default config;
