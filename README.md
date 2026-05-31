````md
# Dashboard App

## Description

This is a small dashboard-style React application created to demonstrate the use of multiple modern frontend technologies. The project focuses on routing, state management, data fetching, and advanced React hooks in a simple and structured way.

---

## Technologies Used

- React
- TypeScript
- Tailwind CSS
- React Router
- Zustand
- TanStack Query
- Cypress

---

## Features

- Multi-page navigation (Home / Users / Counter)
- External API consumption (users list)
- Global state management with Zustand (counter)
- Search and filtering functionality
- Responsive UI using Tailwind CSS
- End-to-end testing with Cypress

---

## React Hooks Used

- useState → local component state
- useEffect → side effects and lifecycle handling
- useMemo → memoized computed values for filtering
- useCallback → memoized event handlers
- useTransition → non-blocking UI updates
- useDeferredValue → deferred rendering for search input
- useLayoutEffect → DOM measurements before paint

---

## API Reference

https://jsonplaceholder.typicode.com/users

---

## Installation

```bash
npm install
````

---

## Running the Project

```bash
npm run dev
```

---

## Testing

### Cypress (End-to-End Testing)

```bash
npx cypress open
```

---

## Project Structure

```txt
src/
├── pages/
│   ├── Home.tsx
│   ├── Users.tsx
│   └── Counter.tsx
├── components/
├── store/
├── services/
├── router/
└── main.tsx
```

---

## Purpose

This project was developed for educational purposes to practice and demonstrate modern React development concepts and ecosystem tools.

```
```