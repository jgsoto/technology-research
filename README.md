# Forms App — React Hook Form · Formik · Zod

> **Project 2** of the Technology Research series.  
> Demonstrates different form and validation approaches in React, structured with Atomic Design.

---

## Tech Stack

| Tool | Version | Role |
|---|---|---|
| React | 19 | UI library |
| TypeScript | 6 | Type safety |
| Vite | 8 | Dev server & bundler |
| React Hook Form | 7 | Performant, ref-based forms |
| Formik | 2 | State-based forms |
| Zod | 4 | Schema validation |
| zod-formik-adapter | 2 | Bridges Zod schemas into Formik |
| @hookform/resolvers | 5 | Bridges Zod schemas into RHF |
| Tailwind CSS | 4 | Utility-first styling |
| Vitest | 3 | Unit & integration tests |
| React Testing Library | 16 | DOM-based component testing |

---

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Run tests (optional — should show 42 passed)
npm test

# 3. Start the dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Available Scripts

```bash
npm run dev        # Start Vite dev server
npm run build      # Type-check + production build
npm test           # Run all tests once
npm run test:watch # Run tests in watch mode
npm run test:ui    # Open Vitest UI in browser
npm run lint       # Run ESLint
npm run preview    # Preview production build
```

---

## Pages

| Route | Description | Library |
|---|---|---|
| `/` | Home — navigation to all pages | — |
| `/login-rhf` | **Page 1** — Login with React Hook Form + Zod | RHF + Zod |
| `/login-formik` | **Page 1 alt.** — Login with Formik + Zod | Formik + Zod |
| `/register-rhf` | **Page 2** — Registration with React Hook Form + Zod | RHF + Zod |
| `/register-formik` | **Page 2 alt.** — Registration with Formik + Zod | Formik + Zod |
| `/profile` | **Page 3** — Editable user profile with reset | RHF + Zod |
| `/comparison` | Comparison table: RHF vs Formik | — |

---

## Project Structure

```
src/
├── components/
│   ├── atoms/                  # Smallest reusable units
│   │   ├── Button/             # Variants: primary | secondary | danger
│   │   ├── Input/              # forwardRef, error state
│   │   ├── Label/              # htmlFor, required indicator
│   │   ├── Textarea/           # forwardRef, error state
│   │   └── ErrorMessage/       # role="alert", accessible
│   ├── molecules/              # Compositions of atoms
│   │   ├── FormField/          # Label + Input + ErrorMessage
│   │   └── TextareaField/      # Label + Textarea + ErrorMessage
│   └── organisms/              # Feature-level form components
│       ├── LoginFormRHF/
│       ├── LoginFormFormik/
│       ├── RegisterFormRHF/
│       ├── RegisterFormFormik/
│       └── ProfileForm/
├── pages/                      # One folder per route
│   ├── HomePage/
│   ├── LoginRHFPage/
│   ├── LoginFormikPage/
│   ├── RegisterRHFPage/
│   ├── RegisterFormikPage/
│   ├── ProfilePage/
│   └── ComparisonPage/
├── schemas/                    # Zod validation schemas
│   ├── loginSchema.ts
│   ├── registerSchema.ts
│   └── profileSchema.ts
└── tests/                      # Vitest + RTL test files
    ├── setup.ts
    ├── atoms.test.tsx
    ├── FormField.test.tsx
    ├── LoginFormRHF.test.tsx
    ├── LoginFormFormik.test.tsx
    ├── RegisterFormRHF.test.tsx
    └── schemas.test.ts
```

---

## Atomic Design

This project follows the [Atomic Design methodology](https://bradfrost.com/blog/post/atomic-web-design/):

- **Atoms** — single-responsibility HTML elements with no business logic (`Button`, `Input`, `Label`, `Textarea`, `ErrorMessage`).
- **Molecules** — atoms composed into a cohesive unit (`FormField`, `TextareaField`). Each generates accessible IDs with `useId`.
- **Organisms** — full feature sections that combine molecules and manage form state (`LoginFormRHF`, `ProfileForm`, etc.).
- **Pages** — thin wrappers that place one organism on screen with a back-navigation link.

---

## Hooks Used

### `useRef`
Used in every form organism to apply **automatic focus** to the first input on mount, without causing re-renders:

```tsx
const inputRef = useRef<HTMLInputElement>(null);

useEffect(() => {
  inputRef.current?.focus();
}, []);
```

In React Hook Form forms, the `useRef` is **merged with RHF's own ref** via a callback ref so both coexist:

```tsx
const { ref: rhfRef, ...rest } = register("email");

<Input
  ref={(node) => {
    rhfRef(node);           // RHF needs this for validation
    myRef.current = node;   // we need this for focus
  }}
  {...rest}
/>
```

### `useId`
Used inside `FormField` and `TextareaField` to generate **stable, unique IDs** that correctly associate `<label htmlFor>` with `<input id>` and `aria-describedby` with the error message:

```tsx
const uid = useId();
const inputId  = `${uid}-input`;
const errorId  = `${uid}-error`;

<Label htmlFor={inputId}>Email</Label>
<Input id={inputId} aria-describedby={errorId} />
<ErrorMessage id={errorId} message={error} />
```

This is the [recommended approach](https://react.dev/reference/react/useId) for accessible form IDs in React 18+.

---

## Validation with Zod

Schemas live in `src/schemas/` and are shared between RHF and Formik:

```ts
// RHF — via @hookform/resolvers
useForm({ resolver: zodResolver(loginSchema) });

// Formik — via zod-formik-adapter
<Formik validationSchema={toFormikValidationSchema(loginSchema)} />
```

The `registerSchema` enforces: min length, uppercase, lowercase, number, and special character, plus a cross-field `confirmPassword` check using `.refine()`.

---

## Testing

**42 tests across 6 files**, covering:

- **Rendering** — components appear in the DOM with correct roles
- **Validation** — error messages appear for invalid input
- **Events** — typing, clicking, and submitting trigger the right behavior  
- **Accessibility** — `htmlFor`/`id` pairing, `aria-invalid`, `aria-describedby`, `role="alert"`, `role="status"`
- **Schemas** — Zod rules tested in isolation (no React needed)

```bash
npm test
# Test Files  6 passed (6)
# Tests       42 passed (42)
```

---

## RHF vs Formik — Quick Comparison

| | React Hook Form | Formik |
|---|---|---|
| State management | Uncontrolled (refs) | Controlled (state) |
| Re-renders | Minimal | On every keystroke |
| Bundle size | ~9 KB | ~15 KB |
| Zod integration | `zodResolver` (official) | `zod-formik-adapter` |
| Learning curve | Low–Medium | Low |
| Best for | Performance-sensitive forms | Simpler, state-driven forms |
