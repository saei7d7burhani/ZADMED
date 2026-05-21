export const products = [
  {
    id: "restore-deb",
    name: "Restore® DEB",
    category: "Drug-Coated Balloon",
    description: "Paclitaxel releasing PTCA balloon catheter powered by Safepax® amorphous coating technology.",
    styleTheme: "default", // Used to conditionally apply xlimus classes
    features: [
      "No distal embolization, amorphous coating",
      "No slow coronary flow risk",
      "Lowest drug wash-off rate on market",
      "Clinically proven in ISR, SVD and De-Novo lesions",
      "5-year RCT follow-up data available"
    ],
    specs: [
      { label: "Balloon Diameter", value: "2.00 - 4.00 mm" },
      { label: "Lengths", value: "15 / 20 / 25 / 30 mm" },
      { label: "Catheter Length", value: "140 cm" },
      { label: "Guidewire", value: "0.014 in" }
    ],
    link: "/contact"
  },
  {
    id: "xlimus-des",
    name: "Xlimus® DES",
    category: "Drug-Eluting Stent",
    description: "Sirolimus-eluting cobalt chromium coronary stent with biodegradable polymer drug elution technology.",
    styleTheme: "xlimus",
    features: [
      "Ultra-thin 73 um struts, L-605 cobalt chromium",
      "6-8-10 cell design for homogeneous scaffolding",
      "Biodegradable polymer, no permanent coating",
      "0.90 mm crossing profile for tortuous anatomy",
      "Widest range, 72 stent sizes available"
    ],
    specs: [
      { label: "Stent Diameter", value: "2.25 - 5.00 mm" },
      { label: "Lengths", value: "8 - 40 mm (9 sizes)" },
      { label: "Strut Thickness", value: "73 um" },
      { label: "Guidewire", value: "0.014 in" }
    ],
    link: "/contact"
  }
];