import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from '../locales/en.json';
import by from '../locales/by.json';
import ru from '../locales/ru.json';

i18n
    .use(initReactI18next)
    .init({
    resources: {
        en,
        by,
        ru,
    },
    fallbackLng: 'en',
    debug: process.env.NODE_ENV !== 'production',
    ns: ['translations'],
    defaultNS: 'translations',
    keySeparator: false,
    interpolation: {
        escapeValue: false,
        formatSeparator: ',',
    },
    react: {
        wait: true,
    },
});

export default i18n;
