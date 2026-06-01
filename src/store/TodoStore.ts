export type TodoFilter = 'all' | 'active' | 'completed'

export type Todo = {
    id: number
    title: string
    completed: boolean
    createdAt: string
}

export type TodoSnapshot = {
    todos: Todo[]
    filter: TodoFilter
}

type Listener = () => void

const defaultTodos: Todo[] = [
    {
        id: 1,
        title: 'Definir la estructura Atomic Design',
        completed: true,
        createdAt: new Date().toISOString(),
    },
    {
        id: 2,
        title: 'Conectar una store reactiva',
        completed: false,
        createdAt: new Date().toISOString(),
    },
]

class TodoStore {
    private snapshot: TodoSnapshot = {
        todos: defaultTodos,
        filter: 'all',
    }

    private listeners = new Set<Listener>()

    subscribe = (listener: Listener) => {
        this.listeners.add(listener)

        return () => {
            this.listeners.delete(listener)
        }
    }

    getSnapshot = () => this.snapshot

    private emit() {
        this.listeners.forEach((listener) => listener())
    }

    addTodo(title: string) {
        const trimmedTitle = title.trim()

        if (!trimmedTitle) {
            return
        }

        const nextTodo: Todo = {
            id: Date.now(),
            title: trimmedTitle,
            completed: false,
            createdAt: new Date().toISOString(),
        }

        this.snapshot = {
            ...this.snapshot,
            todos: [nextTodo, ...this.snapshot.todos],
        }

        this.emit()
    }

    toggleTodo(id: number) {
        this.snapshot = {
            ...this.snapshot,
            todos: this.snapshot.todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo,
            ),
        }

        this.emit()
    }

    removeTodo(id: number) {
        this.snapshot = {
            ...this.snapshot,
            todos: this.snapshot.todos.filter((todo) => todo.id !== id),
        }

        this.emit()
    }

    setFilter(filter: TodoFilter) {
        this.snapshot = {
            ...this.snapshot,
            filter,
        }

        this.emit()
    }
}

export const todoStore = new TodoStore()