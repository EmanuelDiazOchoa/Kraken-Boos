import es from './es.json';
import en from './en.json';
import pt from './pt.json';

const translations = {
  es,
  en,
  pt,
};

export function t(key, lang = "es") {
  return translations[lang]?.[key] || key;
}
