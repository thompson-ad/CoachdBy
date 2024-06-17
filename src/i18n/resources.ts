import en from '@/translations/en.json';
import ar from '@/translations/ar.json';

export const resources = {
  en: {
    translation: en,
  },
  ar: {
    translation: ar,
  },
};

export type Language = keyof typeof resources;
