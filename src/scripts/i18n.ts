import { getLang, setLang, t } from '../i18n/utils';

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
  
  // Find all elements with a data-i18n attribute
  const elements = document.querySelectorAll<HTMLElement>('[data-i18n]');
  
  elements.forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (key) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        (el as HTMLInputElement | HTMLTextAreaElement).placeholder = t(key, currentLang);
      } else {
        // Use innerHTML to support <br /> and <em> tags from the dictionary
        el.innerHTML = t(key, currentLang);
      }
    }
  });

  // Specifically handle the language toggle button text
  const toggleBtn = document.getElementById('lang-toggle-btn');
  if (toggleBtn) {
    toggleBtn.textContent = currentLang === 'en' ? 'AR' : 'EN';
  }
}
