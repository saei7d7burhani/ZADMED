export const ui = {
  en: {
    "nav.products": "Products",
    "nav.about": "About",
    "nav.contact": "Contact",
    "nav.language": "العربية",
    "hero.badge": "Advanced Cardiovascular Solutions",
    "hero.title": "Precision Tools for<br /><em>Life-Saving</em><br />Interventions",
    "hero.subtitle": "ZADMED delivers world-class cardiovascular medical instruments to healthcare professionals, combining innovative technology with clinically proven performance.",
    "hero.ctaPrimary": "Explore Products",
    "hero.ctaSecondary": "Get in Touch",
    "hero.stats.num1": "10M+",
    "hero.stats.label1": "Patients Treated",
    "hero.stats.num2": "5yr",
    "hero.stats.label2": "Clinical Follow-up",
    "hero.stats.num3": "98%+",
    "hero.stats.label3": "Procedural Success",
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
    "hero.badge": "حلول متقدمة للرعاية القلبية والأوعية الدموية",
    "hero.title": "أدوات دقيقة <br /> لتدخلات <br /> <em>تُنقذ الحياة</em>",
    "hero.subtitle": "تقدم ZADMED أدوات طبية عالمية المستوى للقلب والأوعية الدموية لأخصائيي الرعاية الصحية، تجمع بين التكنولوجيا المبتكرة والأداء السريري المثبت.",
    "hero.ctaPrimary": "استكشف المنتجات",
    "hero.ctaSecondary": "تواصل معنا",
    "hero.stats.num1": "+10 مليون",
    "hero.stats.label1": "مرضى تم علاجهم",
    "hero.stats.num2": "5 سنوات",
    "hero.stats.label2": "متابعة سريرية",
    "hero.stats.num3": "+%98",
    "hero.stats.label3": "نجاح الإجراءات",
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