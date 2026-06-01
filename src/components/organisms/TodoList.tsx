import type { Todo } from '../../store/TodoStore'
import { TodoItem } from '../molecules/TodoItem'

type TodoListProps = {
    todos: Todo[]
    onToggle: (id: number) => void
    onRemove: (id: number) => void
}

export function TodoList({ todos, onToggle, onRemove }: TodoListProps) {
    if (todos.length === 0) {
        return <p className="todo-layout__empty">No hay tareas para este filtro.</p>
    }

    return (
        <section className="todo-list" aria-label="Lista de tareas">
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} onToggle={onToggle} onRemove={onRemove} />
            ))}
        </section>
    )
}