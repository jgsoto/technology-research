import { makeAutoObservable } from "mobx";

export interface Todo {
    id: string;
    title: string;
    isCompleted: boolean;
}

class TodoStore {
    todos: Todo[] = [];
    filter: "all" | "completed" | "active" = "all";

    constructor() {
        makeAutoObservable(this);
    }

    addTodo(title: string) {
        const newTodo: Todo = {
            id: crypto.randomUUID(),
            title,
            isCompleted: false,
        };
        this.todos.push(newTodo);
    }

    toggleTodo(id: string) {
        const todo = this.todos.find((t) => t.id === id);
        if (todo) {
            todo.isCompleted = !todo.isCompleted;
        }
    }

    deleteTodo(id: string) {
        this.todos = this.todos.filter((t) => t.id !== id);
    }

    setFilter(filter: "all" | "completed" | "active") {
        this.filter = filter;
    }

    get filteredTodos() {
        if (this.filter === "completed") return this.todos.filter((t) => t.isCompleted);
        if (this.filter === "active") return this.todos.filter((t) => !t.isCompleted);
        return this.todos;
    }
}

export const todoStore = new TodoStore();