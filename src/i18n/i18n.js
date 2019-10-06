import I18n from 'i18n-js';
import {LOCALES} from '../constants/index';

//default locale
I18n.defaultLocale = LOCALES.ENGLISH.name;

// Enable fallbacks  to `en`
I18n.fallbacks = true;

//current locale
I18n.locale = LOCALES.ENGLISH.name;

I18n.translations = {
  en: require('./languages/english.json'),
  es: require('./languages/espanol.json'),
};

// let languageCode = I18n.locale.substr(0, 2)

// All other translations for the app goes to the respective language file:
// switch(languageCode){
//     case 'hi':
//       I18n.translations.hi = require('./languages/hindi.json')
//     break
// }
