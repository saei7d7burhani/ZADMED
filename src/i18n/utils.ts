import { ui, type Language, type TranslationKey } from './ui';

/**
 * Retrieves the current language from localStorage.
 * Defaults to 'en' if not set or if running on the server.
 */
export function getLang(): Language {
  if (typeof window !== 'undefined') {
    const storedLang = localStorage.getItem('lang');
    if (storedLang === 'ar' || storedLang === 'en') {
      return storedLang as Language;
    }
  }
  return 'en';
}

/**
 * Saves language to localStorage, updates document attributes,
 * and fires the custom 'langchange' event.
 */
export function setLang(lang: Language) {
  if (typeof window !== 'undefined') {
    localStorage.setItem('lang', lang);
    
    const html = document.documentElement;
    html.lang = lang;
    html.dir = lang === 'ar' ? 'rtl' : 'ltr';
    
    const event = new CustomEvent('langchange', { detail: { lang } });
    window.dispatchEvent(event);
  }
}

/**
 * Toggles the language between English and Arabic.
 */
export function toggleLang(): Language {
  const currentLang = getLang();
  const newLang = currentLang === 'en' ? 'ar' : 'en';
  setLang(newLang);
  return newLang;
}

/**
 * Helper to get a translation string based on localStorage.
 * Useful for client-side scripts.
 */
export function t(key: string, langOverride?: Language): string {
  const currentLang = langOverride || getLang();
  const dictionary = ui[currentLang] || ui.en;
  
  const translation = dictionary[key as TranslationKey];
  
  // Fall back to English dictionary or return the raw key
  if (!translation && currentLang !== 'en') {
    return ui.en[key as TranslationKey] || key;
  }
  
  return translation || key;
}