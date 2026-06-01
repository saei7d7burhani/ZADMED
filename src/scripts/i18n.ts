import { getLang, setLang, t } from '../i18n/utils';
import { ui } from '../i18n/ui';

// Expose full translations to window so inline scripts (e.g. ContactForm) can access them
(window as any).__zadmedTranslations = ui;

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', () => {
  // 1. Read lang from localStorage and apply dir + lang to <html>
  const currentLang = getLang();
  setLang(currentLang);
  
  // 2. Initial DOM update
  updateAllTranslations();
});

// 3. Listen for the langchange event to update the UI
window.addEventListener('langchange', () => {
  updateAllTranslations();
});

function updateAllTranslations() {
  const currentLang = getLang();
  
  // data-i18n: translate innerHTML or placeholder
  document.querySelectorAll<HTMLElement>('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (!key) return;

    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
      // inputs with data-i18n set their placeholder
      (el as HTMLInputElement | HTMLTextAreaElement).placeholder = t(key, currentLang);
    } else if (el.tagName === 'OPTION') {
      // <option> elements: set textContent (innerHTML can break select)
      el.textContent = t(key, currentLang);
    } else {
      // Use innerHTML to support <br /> and <em> tags from the dictionary
      el.innerHTML = t(key, currentLang);
    }
  });

  // data-i18n-placeholder: explicitly set placeholder on inputs/textareas
  document.querySelectorAll<HTMLElement>('[data-i18n-placeholder]').forEach((el) => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (!key) return;
    (el as HTMLInputElement | HTMLTextAreaElement).placeholder = t(key, currentLang);
  });

  // Specifically handle the language toggle button text
  const toggleBtn = document.getElementById('lang-toggle-btn');
  if (toggleBtn) {
    toggleBtn.textContent = currentLang === 'en' ? 'AR' : 'EN';
  }
}