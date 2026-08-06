# Femiknit Storefront

Femiknit is a polished ecommerce storefront built with Next.js and React for a modern Indian ethnic wear brand. The experience is designed to feel premium on desktop while staying comfortable and easy to use on mobile phones, tablets, and larger screens.

## What this project includes

This storefront showcases:

- A sticky, mobile-friendly header with an offer ticker, navigation, search, wishlist, account, and cart actions
- A hero carousel with animated slides, rich imagery, and clear calls to action
- A curated shopping experience with interactive filters for category, size, color, price, age group, occasion, and keyword search
- Product cards with image transitions, wishlist controls, swatches, pricing, and quick purchase buttons
- Dedicated sections for age-group styling, festive collections, trust signals, and a newsletter footer

## Tech stack

- Next.js 16 with the App Router
- React 19
- Tailwind CSS 4 for styling and layout
- Framer Motion for subtle animations and transitions
- Lucide React for icons
- TypeScript for component and data safety

## Project structure

- app/ – top-level route and global styles
- components/ – reusable storefront UI blocks such as the header, hero carousel, product cards, and footer
- context/ – shared store state for cart and wishlist interactions
- lib/ – mock product and content data used to render the experience

## Run locally

### Requirements

- Node.js 20.9 or newer
- A package manager such as npm or pnpm

### Install dependencies

```bash
npm install
```

If you prefer pnpm, the repository also includes a lockfile and should work with:

```bash
pnpm install
```

### Start the development server

```bash
npm run dev
```

Then open http://localhost:3000 in your browser.

### Preview script

This workspace also includes a portable preview helper for environments where Node is not installed globally:

```powershell
./start-preview.ps1
```

## Available scripts

```bash
npm run dev
npm run build
npm run start
npm run typecheck
```

- dev starts the local development server
- build creates a production build
- start runs the production build locally
- typecheck validates the TypeScript project without emitting files

## Responsive behavior

The interface has been tuned for multiple screen sizes:

- Mobile phones: compact headers, stacked content, touch-friendly buttons, and simplified spacing
- Tablets: balanced two-column layouts and comfortable content density
- Desktop: wide editorial layouts, sticky sidebars, and full visual impact

## Customization ideas

You can quickly adapt the storefront by editing:

- lib/data.ts for products, collections, and content copy
- components/ for layout and visual behavior
- app/globals.css for shared theme polish and utility enhancements

## Production checklist

Before shipping, it is a good idea to:

1. Run the type checker
2. Build the app locally
3. Review the responsive layout on a phone-sized viewport
4. Verify images, links, and CTA behavior

Example verification commands:

```bash
npm run typecheck
npm run build
```

## Notes

The current version uses sample content and local state for cart and wishlist interactions. It is a strong foundation for a real brand storefront and can be extended with checkout, authentication, CMS integration, and live inventory next.
