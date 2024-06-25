import 'dotenv/config';
import type { ConfigContext, ExpoConfig } from '@expo/config';

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: 'coachdby',
  slug: 'coachdby',
  scheme: 'coachdby',
  version: '1.0.0',
  orientation: 'portrait',
  icon: './assets/icon.png',
  userInterfaceStyle: 'light',
  splash: {
    image: './assets/splash.png',
    resizeMode: 'contain',
    backgroundColor: '#ffffff',
  },
  ios: {
    supportsTablet: true,
    bundleIdentifier: 'com.coachdby.app',
  },
  android: {
    package: 'com.coachdby.app',
    adaptiveIcon: {
      foregroundImage: './assets/adaptive-icon.png',
      backgroundColor: '#ffffff',
    },
  },
  web: {
    favicon: './assets/favicon.png',
  },
  extra: {
    supabaseUrl: process.env.EXPO_PUBLIC_SUPABASE_URL,
    supabaseKey: process.env.EXPO_PUBLIC_SUPABASE_KEY,
    eas: {
      projectId: 'dedf7329-00ff-4541-bb20-8e3c4c388a3d',
    },
  },
  plugins: [
    'expo-router',
    [
      'expo-font',
      {
        fonts: [
          './assets/fonts/Geist-Regular.otf',
          './assets/fonts/Geist-Bold.otf',
          './assets/fonts/Geist-Medium.otf',
          './assets/fonts/Geist-Light.otf',
          './assets/fonts/Geist-Thin.otf',
          './assets/fonts/Geist-SemiBold.otf',
          './assets/fonts/Geist-Ultralight.otf',
          './assets/fonts/Geist-Black.otf',
          './assets/fonts/Geist-UltraBlack.otf',
        ],
      },
    ],
    'expo-localization',
  ],
  experiments: {
    typedRoutes: true,
  },
});
