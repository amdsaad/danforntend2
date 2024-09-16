// import i18n from 'i18next';
// import { initReactI18next } from 'react-i18next';
// import arTranslation from './locales/ar/ar.json';

// const resources = {
//   ar: {
//     translation: arTranslation,
//   }
// };

// i18n.use(initReactI18next).init({
//   resources,
//   lng: 'ar', // Set the default language here
//   fallbackLng: 'ar',
//   interpolation: {
//     escapeValue: false,
//   },
// });

// export default i18n;
module.exports = {
  i18n: {
    defaultLocale: "ar",
    locales: ["en", "ar"],
    localeDetection: false,
  },
  reloadOnPrerender: true

};