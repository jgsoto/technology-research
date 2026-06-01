# Project 5 - TanStack Router Demo

This branch is a minimal React + TypeScript starter for a TanStack Router demo.
It keeps the app intentionally small and focuses on typed navigation plus one external
state example with `useSyncExternalStore`.

## Overview

The app shows three routes:

- Home
- Users
- About

It also includes a lightweight theme toggle backed by `localStorage` to demonstrate
how React can subscribe to external state.

## Tech Stack

- React 19
- TypeScript 6
- Vite 8
- TanStack Router 1

## Technology Definitions

### React

React is a JavaScript library for building user interfaces with reusable components.
It is the foundation of this project and is responsible for rendering the pages,
the shared layout, and the UI that reacts to state changes.

### TypeScript

TypeScript is a typed superset of JavaScript. It adds static typing on top of JavaScript,
which helps catch errors earlier and makes the routing and store code easier to maintain.

### Vite

Vite is a fast frontend build tool and development server. In this project it handles
local development, production builds, and fast refresh during development.

### TanStack Router

TanStack Router is a type-safe routing library for React. It manages navigation between
pages, keeps route definitions explicit, and helps prevent routing mistakes with TypeScript.

### JavaScript

JavaScript is the language that powers the browser. This demo uses JavaScript concepts
through React and TypeScript to handle UI behavior, events, and state synchronization.

## Features

- Typed route navigation
- Shared layout with a top navigation bar
- Theme toggle synced with `localStorage`
- Simple demo pages for Home, Users, and About

## Hooks Used

### `useSyncExternalStore`

Used in `src/hooks/useTheme.ts` to keep the UI synchronized with an external theme store.

Typical use case:

- listening to `localStorage` changes
- syncing a shared store outside React

Why it is useful here:

- It lets React subscribe to data that lives outside the component tree.
- It keeps the theme value in sync if another tab updates `localStorage`.
- It provides a stable way to integrate external state without using a larger state library.

### `useEffect`

Used in the layout to apply the current theme to the document root.

Why it is useful here:

- It runs side effects after rendering.
- It updates the document theme attribute when the external store changes.
- It keeps the UI and the global page state aligned.

## Architecture

The project uses a small, clean structure:

```text
src/
  components/
    atoms/
    molecules/
    templates/
  hooks/
  pages/
  router/
  store/
  App.tsx
  main.tsx
  index.css
```

### File Roles

- `src/main.tsx`: app entry point.
- `src/App.tsx`: renders the router provider.
- `src/router/`: TanStack Router setup and route definitions.
- `src/pages/`: page components for Home, Users, and About.
- `src/components/templates/MainLayout.tsx`: shared layout with navigation.
- `src/components/molecules/Navbar.tsx`: top navigation bar and theme toggle.
- `src/components/atoms/`: small reusable UI primitives.
- `src/hooks/useTheme.ts`: hook that reads from the external theme store.
- `src/store/ExternalThemeStore.ts`: store that persists the theme in `localStorage`.

## Installation

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Notes

- This project is intentionally small so it can be used as a clean base for later exercises.
- The theme toggle is the only external state example; everything else stays simple and route-driven.

## Official Documentation

- React: https://react.dev/
- TypeScript: https://www.typescriptlang.org/
- JavaScript Guide: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide
- TanStack Router: https://tanstack.com/router/latest
- Vite: https://vite.dev/
- MDN Web Docs: https://developer.mozilla.org/
