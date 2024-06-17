import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { resources } from './resources';
import { getLocales } from 'expo-localization';
import { getLanguage } from './utils';

// export const isRTL: boolean = i18n.dir() === 'rtl';

// Note that on iOS the app will reload if the system locale changes but that is not the case on Android
// https://ilearnedathing.com/internationalizing-a-react-native-app-with-i18next-and-expo-part-1?source=more_series_bottom_blogs

export const initialiseI18n = () => {
  i18n.use(initReactI18next).init({
    resources,
    lng: getLanguage() || getLocales()?.[0]?.languageTag || 'en',
    fallbackLng: 'en',
    compatibilityJSON: 'v3', // By default React Native projects does not support Intl

    // allows integrating dynamic values into translations.
    interpolation: {
      escapeValue: false, // escape passed in values to avoid XSS injections
    },
  });

  // I18nManager.allowRTL(isRTL);
  // I18nManager.forceRTL(isRTL);
};

export default i18n;
