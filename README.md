# Dashboard App

## Description

This is a small dashboard-style React application created to demonstrate the use of multiple modern frontend technologies. The project focuses on routing, state management, data fetching, and advanced React hooks in a simple and structured way.

## Technologies Used

- React
- TypeScript
- Tailwind CSS
- React Router
- Zustand
- TanStack Query
- Cypress

## Features

- Multi-page navigation (Home / Users / Counter)
- External API consumption (users list)
- Global state management with Zustand (counter)
- Search and filtering functionality
- Responsive UI using Tailwind CSS
- End-to-end testing with Cypress

## React Hooks Used

- useState → Local state management
- useEffect → Side effects and lifecycle handling
- useMemo → Memoized computed values for filtering optimization
- useCallback → Memoized event handlers to prevent unnecessary re-renders
- useTransition → Non-blocking UI updates for smoother interactions
- useDeferredValue → Deferred rendering for search input optimization
- useLayoutEffect → DOM measurements before paint

## API Reference

https://jsonplaceholder.typicode.com/users

## Installation

npm install

## Running the Project

npm run dev

The application will run at:

http://localhost:5173

## Testing

### Cypress (End-to-End Testing)

npx cypress open

npx cypress run

## Project Structure

```text
src/
├── pages/
│   ├── Home.tsx
│   ├── Users.tsx
│   └── Counter.tsx
├── components/
│   ├── Navbar.tsx
│   └── UserCard.tsx
├── store/
│   └── counterStore.ts
├── services/
│   └── usersApi.ts
├── router/
│   └── AppRouter.tsx
├── App.tsx
└── main.tsx
```


## Key Implementation Notes

- Zustand is used for global state management (counter logic)
- TanStack Query handles API fetching and caching
- React Router manages navigation between pages
- Tailwind CSS is used for all styling and layout
- Cypress is used for end-to-end testing

## Purpose

This project was developed for educational purposes to demonstrate practical usage of modern React ecosystem tools and core frontend development concepts.