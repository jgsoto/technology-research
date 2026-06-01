# Chakra Todo App — Project 4

A professional task management application built with **React**, **Chakra UI**, and **MobX** for reactive state management. This project follows the **Atomic Design** architecture and demonstrates advanced React hook usage for internal component logic and imperative control.

## 🚀 Technologies & Versions

- **React 19.2**: Core UI library.
- **Chakra UI 2.8.0**: Component library for modular and accessible UI.
- **MobX 6.15.4**: Reactive state management for the global todo store.
- **Vite 8.0.12**: Fast build tool and development server.
- **TypeScript 6.0.2**: Static typing for enhanced developer experience.

## 🏗️ Project Architecture

The project is structured following the **Atomic Design** methodology, ensuring high modularity and reusability:

```text
src/
├── components/
│   ├── atoms/       # Smallest functional units (Button, Input, Checkbox)
│   ├── molecules/   # Combinations of atoms (TodoForm, TodoItem, ConfirmModal)
│   ├── organisms/   # Complex UI sections (TodoList, FilterTabs)
│   └── templates/   # Page layout structures (TodoLayout)
├── store/           # MobX reactive state management (TodoStore.ts)
├── hooks/           # Custom React hooks (if any)
├── App.tsx          # Root component
└── main.tsx         # Application entry point
```

## 🧠 Hook Implementation

This project explicitly implements two fundamental React hooks within the `molecules` layer to handle specific logic requirements:

### 1. `useReducer` (Internal State Management)
Used in **`src/components/molecules/TodoForm.tsx`**.
- **Definition**: Manages complex state logic where the next state depends on the previous one or when multiple sub-values are updated together.
- **Usage**: Handles the form state for creating new tasks, including the input value (`title`), validation state (`isInvalid`), and a `RESET` action to clear the form after submission.

### 2. `useImperativeHandle` (Imperative Component Control)
Used in **`src/components/molecules/ConfirmModal.tsx`**.
- **Definition**: Customizes the instance value that is exposed to parent components when using `ref`.
- **Usage**: In conjunction with `forwardRef`, it exposes an `open()` method to the parent. This allows the parent component (e.g., `TodoItem`) to trigger the modal imperatively without having to manage the `isOpen` state locally.

## ✨ Features

- **Create Task**: Add new todos via a validated form.
- **Delete Task**: Remove tasks with a confirmation modal for safety.
- **Mark Completed**: Toggle task status with reactive updates.
- **Filter Tasks**: Categorize view by "All", "Active", or "Completed".
- **Reactive State**: Powered by MobX for seamless synchronization between the store and UI.

## 🛠️ Installation & Setup

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd technology-research
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run in development mode**:
   ```bash
   npm run dev
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```

## 📚 Documentation References

For further information on the technologies used in this project, please refer to their official documentation:

- **React**: [react.dev](https://react.dev/)
- **Chakra UI**: [chakra-ui.com](https://chakra-ui.com/)
- **MobX**: [mobx.js.org](https://mobx.js.org/README.html)
- **Vite**: [vite.dev](https://vite.dev/)
- **TypeScript**: [typescriptlang.org](https://www.typescriptlang.org/)
- **Atomic Design Principles**: [Brad Frost - Atomic Design](https://atomicdesign.bradfrost.com/)

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.
