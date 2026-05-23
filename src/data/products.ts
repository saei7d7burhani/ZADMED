export const products = [
  {
    id: "restore-deb",
    name: "Restore® DEB",
    nameKey: "prod.restore.name",
    category: "Drug-Coated Balloon",
    categoryKey: "prod.restore.category",
    description: "Paclitaxel releasing PTCA balloon catheter powered by Safepax® amorphous coating technology.",
    descKey: "prod.restore.desc",
    styleTheme: "default", // Used to conditionally apply xlimus classes
    features: [
      { text: "No distal embolization, amorphous coating", key: "prod.restore.f1" },
      { text: "No slow coronary flow risk", key: "prod.restore.f2" },
      { text: "Lowest drug wash-off rate on market", key: "prod.restore.f3" },
      { text: "Clinically proven in ISR, SVD and De-Novo lesions", key: "prod.restore.f4" },
      { text: "5-year RCT follow-up data available", key: "prod.restore.f5" }
    ],
    specs: [
      { label: "Balloon Diameter", labelKey: "prod.spec.balloon", value: "2.00 - 4.00 mm", valueKey: "prod.restore.s1" },
      { label: "Lengths", labelKey: "prod.spec.lengths", value: "15 / 20 / 25 / 30 mm", valueKey: "prod.restore.s2" },
      { label: "Catheter Length", labelKey: "prod.spec.catheter", value: "140 cm", valueKey: "prod.restore.s3" },
      { label: "Guidewire", labelKey: "prod.spec.guidewire", value: "0.014 in", valueKey: "prod.restore.s4" }
    ],
    link: "/contact"
  },
  {
    id: "xlimus-des",
    name: "Xlimus® DES",
    nameKey: "prod.xlimus.name",
    category: "Drug-Eluting Stent",
    categoryKey: "prod.xlimus.category",
    description: "Sirolimus-eluting cobalt chromium coronary stent with biodegradable polymer drug elution technology.",
    descKey: "prod.xlimus.desc",
    styleTheme: "xlimus",
    features: [
      { text: "Ultra-thin 73 um struts, L-605 cobalt chromium", key: "prod.xlimus.f1"},
      { text: "6-8-10 cell design for homogeneous scaffolding", key: "prod.xlimus.f2"},
      { text: "Biodegradable polymer, no permanent coating", key: "prod.xlimus.f3"},
      { text: "0.90 mm crossing profile for tortuous anatomy", key: "prod.xlimus.f4"},
      { text: "Widest range, 72 stent sizes available", key: "prod.xlimus.f5"}
    ],
    specs: [
      { label: "Stent Diameter", labelKey: "prod.spec.stent", value: "2.25 - 5.00 mm", valueKey: "prod.xlimus.s1" },
      { label: "Lengths", labelKey: "prod.spec.lengths", value: "8 - 40 mm (9 sizes)", valueKey: "prod.xlimus.s2" },
      { label: "Strut Thickness", labelKey: "prod.spec.strut", value: "73 um", valueKey: "prod.xlimus.s3" },
      { label: "Guidewire", labelKey: "prod.spec.guidewire", value: "0.014 in", valueKey: "prod.xlimus.s4" }
    ],
    link: "/contact"
  }
];