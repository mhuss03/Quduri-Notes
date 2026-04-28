# Qudūrī — Islamic Commercial Law Study App

A React + TypeScript + Vite study application for Mukhtaṣar al-Qudūrī.

## Features

- 5 chapters: Iqālah, Murābaḥa & Tawliya, Ribā, Salam, Ṣarf
- Rules with colour-coded accents
- Scholar comparison tables (responsive, mobile-stacking)
- Flashcard decks with reveal animation
- Dark / light theme toggle (persisted in localStorage)
- Fully responsive: mobile, tablet, desktop
- React Router v6 with chapter-based routing
- CSS Modules — no CSS-in-JS dependency
- TypeScript throughout

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Open http://localhost:5173
```

## Build for production

```bash
npm run build
npm run preview   # preview the production build locally
```

## Deploy

### Netlify
- Drag the `dist/` folder to https://app.netlify.com/drop
- Or connect the repo and set build command: `npm run build`, publish dir: `dist`

### Vercel
```bash
npx vercel
```

### GitHub Pages
```bash
npm run build
# push dist/ to gh-pages branch
```

## Project Structure

```
src/
├── components/
│   ├── Navbar.tsx           # Fixed header with mobile drawer
│   ├── Navbar.module.css
│   ├── RuleCard.tsx         # Colour-accented rule cards
│   ├── RuleCard.module.css
│   ├── DataTable.tsx        # Scholar/commodity comparison tables
│   ├── DataTable.module.css
│   ├── FlashcardDeck.tsx    # Reveal-on-click flashcards
│   └── FlashcardDeck.module.css
├── pages/
│   ├── HomePage.tsx         # Chapter grid landing page
│   ├── HomePage.module.css
│   ├── ChapterPage.tsx      # Per-chapter tabbed view
│   └── ChapterPage.module.css
├── data/
│   └── chapters.ts          # All chapter content + types
├── hooks/
│   ├── useTheme.ts          # Dark/light theme hook
│   └── useFlashcard.ts      # Flashcard state hook
├── styles/
│   └── globals.css          # Design tokens, reset, animations
├── App.tsx
└── main.tsx
```

## Adding a New Chapter

1. Add a new entry to `src/data/chapters.ts` following the `Chapter` interface
2. That's it — the router and nav pick it up automatically

## Tech Stack

- React 18
- TypeScript 5
- Vite 5
- React Router DOM 6
- CSS Modules (zero runtime CSS-in-JS)
- Google Fonts: Amiri (Arabic), Playfair Display, DM Sans
