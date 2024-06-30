import { config as configBase } from '@tamagui/config/v3';
import { createTamagui, createFont, setupDev, getVariableValue } from 'tamagui';

// Hold down Option for a second to see some helpful visuals
setupDev({
  visualizer: true,
});

const fontSize = {
  1: 11,
  2: 12,
  3: 13,
  4: 14,
  true: 14,
  5: 16,
  6: 18,
  7: 20,
  8: 23,
  9: 30,
  10: 46,
  11: 55,
  12: 62,
  13: 72,
  14: 92,
  15: 114,
  16: 134,
};

const geistFont = createFont({
  family: 'Geist-Regular',
  face: {
    100: { normal: 'Geist-Thin' },
    200: { normal: 'Geist-UltraLight' },
    300: { normal: 'Geist-Light' },
    400: { normal: 'Geist-Regular' },
    500: { normal: 'Geist-Medium' },
    600: { normal: 'Geist-SemiBold' },
    700: { normal: 'Geist-Bold' },
    800: { normal: 'Geist-Black' },
    900: { normal: 'Geist-UltraBlack' },
  },
  size: Object.fromEntries(
    Object.entries(fontSize).map(([k, v]) => [k, getVariableValue(v)]),
  ),
  lineHeight: Object.fromEntries(
    Object.entries(fontSize).map(([k, v]) => [k, getVariableValue(v) + 4]),
  ),
});

const customConfig = {
  ...configBase,
  fonts: {
    heading: geistFont,
    body: geistFont,
  },
};

console.log(JSON.stringify(customConfig));

export const config = createTamagui(customConfig);

export default config;

export type Conf = typeof config;

declare module 'tamagui' {
  interface TamaguiCustomConfig extends Conf {}
}
