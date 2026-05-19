# Astro-test

Project structure:

```text
Astro-test/
├── public/                  # Static assets (images, favicon, etc.)
├── src/
│   ├── components/          # Reusable UI components (.astro/.jsx/.tsx)
│   ├── layouts/             # Page/layout wrappers
│   ├── pages/               # Route-based pages (file = route)
│   ├── content/             # (Optional, recommended) content collections
│   ├── styles/              # Global/shared styles
│   ├── utils/               # Helpers/utilities
│   └── scripts/             # Small client scripts if needed
├── astro.config.mjs         # Astro config
├── tsconfig.json            # TypeScript config
├── package.json
└── README.md
```

## Commands

- `npm install` - Install dependencies
- `npm run dev` - Start local development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
