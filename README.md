# Project 3 - Material Theme App

Material Theme App is a small React demo focused on global theme management with Material UI, React Context, and React Router.
It showcases how a shared theme can drive the entire interface while keeping the codebase simple and easy to extend.

## Overview

This project presents a themed application layout with a top navigation bar, reusable cards, a profile view, a settings view, and a global dark/light mode switch.
The theme is managed centrally so every screen responds to the same visual state.

## Tech Stack

- React 19
- TypeScript 6
- Vite 8
- Material UI
- React Router
- React Context API

## Features

- Responsive navbar
- Reusable info cards
- Profile page
- Settings page
- Global dark/light mode toggle
- Shared application theme controlled from one place

## Hooks Used

### `useContext`

Used to access the shared theme state from the custom theme hook.
It allows the app to read and update the global theme without prop drilling.

### `useDebugValue`

Used inside the custom theme hook to expose useful debug information in React DevTools.
This makes it easier to inspect the current theme mode while developing.

## Project Structure

```text
src/
  components/
    atoms/
    molecules/
    organisms/
    templates/
  context/
  hooks/
  pages/
  router/
  store/
  App.tsx
  main.tsx
  index.css
```

## Key Files

- `src/App.tsx`: wraps the app with the theme provider and router.
- `src/context/ThemeContext.tsx`: stores the global theme state.
- `src/hooks/useAppTheme.ts`: custom hook for reading and toggling the theme.
- `src/components/atoms/ThemeSwitch.tsx`: Material UI switch for dark/light mode.
- `src/components/organisms/Navbar.tsx`: top navigation bar and theme control.
- `src/components/molecules/InfoCard.tsx`: reusable card used across pages.
- `src/pages/ProfilePage.tsx`: user profile demo screen.
- `src/pages/SettingsPage.tsx`: settings and theme preferences screen.
- `src/router/AppRouter.tsx`: application routing with React Router.

## Available Scripts

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build the project:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

Run linting:

```bash
npm run lint
```

## Notes

- The project is designed as a demonstration of a global theme workflow.
- Material UI provides the visual foundation, while Context API keeps the theme state centralized.
- The reusable card component makes it easy to expand the app with new sections later.
