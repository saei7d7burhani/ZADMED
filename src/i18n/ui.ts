export const ui = {
  en: {
    "nav.products": "Products",
    "nav.about": "About",
    "nav.contact": "Contact",
    "nav.language": "العربية",
    "hero.title": "Advancing Cardiovascular Care",
    "hero.subtitle": "ZADMED delivers specialized instruments and proven clinical solutions for coronary artery disease treatment, supporting healthcare professionals at every step.",
    "hero.ctaPrimary": "Explore Products",
    "hero.ctaSecondary": "Contact Sales",
    "stats.title1": "Product Lines",
    "stats.title2": "Partner Hospitals",
    "partners.title": "Trusted by leading healthcare institutions",
    "why.title": "Why Partner With ZADMED?",
    "why.clinical.title": "Clinical Excellence",
    "why.clinical.desc": "Our products are backed by robust clinical data and designed in collaboration with leading interventional cardiologists.",
    "why.support.title": "Dedicated Support",
    "why.support.desc": "We provide comprehensive on-site training and 24/7 technical support for our entire product portfolio.",
    "why.innovation.title": "Continuous Innovation",
    "why.innovation.desc": "We constantly expand our portfolio with next-generation devices to meet evolving clinical challenges.",
    "cta.title": "Ready to equip your facility?",
    "cta.subtitle": "Get in touch with our specialists for product demonstrations and customized quotes.",
    "cta.button": "Contact Us Today",
    "footer.desc": "Delivering advanced medical devices and solutions for cardiovascular care.",
    "footer.quickLinks": "Quick Links",
    "footer.contact": "Contact",
    "footer.copyright": "© 2026 ZADMED. All rights reserved.",
  },
  ar: {
    "nav.products": "المنتجات",
    "nav.about": "عن الشركة",
    "nav.contact": "تواصل معنا",
    "nav.language": "English",
    "hero.title": "تطوير الرعاية القلبية والأوعية الدموية",
    "hero.subtitle": "تقدم ZADMED أدوات متخصصة وحلولاً سريرية مثبتة لعلاج أمراض الشريان التاجي، وندعم أخصائيي الرعاية الصحية في كل خطوة.",
    "hero.ctaPrimary": "استكشف المنتجات",
    "hero.ctaSecondary": "تواصل مع المبيعات",
    "stats.title1": "خطوط منتجات",
    "stats.title2": "مستشفى شريك",
    "partners.title": "محل ثقة كبرى مؤسسات الرعاية الصحية",
    "why.title": "لماذا تختار شراكة ZADMED؟",
    "why.clinical.title": "التفوق السريري",
    "why.clinical.desc": "منتجاتنا مدعومة ببيانات سريرية قوية ومصممة بالتعاون مع رواد أطباء القلب التدخليين.",
    "why.support.title": "دعم مخصص",
    "why.support.desc": "نوفر تدريبًا شاملاً في الموقع ودعم فني على مدار الساعة لجميع تشكيلة منتجاتنا.",
    "why.innovation.title": "ابتكار مستمر",
    "why.innovation.desc": "نقوم بتوسيع محفظتنا باستمرار بأجهزة من الجيل التالي لتلبية التحديات السريرية المتطورة.",
    "cta.title": "هل أنت مستعد لتجهيز منشأتك؟",
    "cta.subtitle": "تواصل مع متخصصينا للحصول على عروض توضيحية للمنتج وعروض أسعار مخصصة.",
    "cta.button": "تواصل معنا اليوم",
    "footer.desc": "توفير أجهزة وحلول طبية متقدمة للرعاية القلبية والوعائية.",
    "footer.quickLinks": "روابط سريعة",
    "footer.contact": "تواصل",
    "footer.copyright": "© 2026 ZADMED. جميع الحقوق محفوظة.",
  }
} as const;

export type Language = keyof typeof ui;
export type TranslationKey = keyof (typeof ui)["en"];

export function getTranslations(lang: string) {
  const resolvedLang = lang as Language;
  const translations = ui[resolvedLang] || ui.en;
  
  return function t(key: TranslationKey) {
    return translations[key] || ui.en[key];
  };
}