import { useSyncExternalStore } from 'react'
import { todoStore, type TodoFilter } from '../store/TodoStore'

export function useTodoStore() {
    const snapshot = useSyncExternalStore(todoStore.subscribe, todoStore.getSnapshot)

    return {
        ...snapshot,
        actions: {
            addTodo: (title: string) => todoStore.addTodo(title),
            toggleTodo: (id: number) => todoStore.toggleTodo(id),
            removeTodo: (id: number) => todoStore.removeTodo(id),
            setFilter: (filter: TodoFilter) => todoStore.setFilter(filter),
        },
    }
}