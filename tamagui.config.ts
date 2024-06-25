import { config as configBase } from '@tamagui/config/v3';
import { createTamagui, createFont } from 'tamagui';

const geistFont = createFont({
  family: 'Geist-Regular',
  size: {
    1: 12,
    2: 14,
    3: 16,
    4: 18,
    5: 20,
    6: 24,
    7: 30,
    8: 36,
    9: 48,
    10: 60,
  },
  face: {
    300: { normal: 'Geist-Light' },
    400: { normal: 'Geist-Regular' },
    500: { normal: 'Geist-Medium' },
    600: { normal: 'Geist-SemiBold' },
    700: { normal: 'Geist-Bold' },
    800: { normal: 'Geist-Black' },
  },
});

const customConfig = {
  ...configBase,
  fonts: {
    heading: geistFont,
    body: geistFont,
  },
};

export const config = createTamagui(customConfig);

export default config;

export type Conf = typeof config;

declare module 'tamagui' {
  interface TamaguiCustomConfig extends Conf {}
}
