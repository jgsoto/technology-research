import type { Todo } from '../../store/TodoStore'

type TodoItemProps = {
    todo: Todo
    onToggle: (id: number) => void
    onRemove: (id: number) => void
}

export function TodoItem({ todo, onToggle, onRemove }: TodoItemProps) {
    return (
        <article className="todo-item">
            <div className="todo-item__content">
                <p
                    className={todo.completed ? 'todo-item__title todo-item__title--done' : 'todo-item__title'}
                >
                    {todo.title}
                </p>
                <span className="todo-item__meta">
                    {todo.completed ? 'Terminada' : 'Pendiente'} ·{' '}
                    {new Date(todo.createdAt).toLocaleTimeString([], {
                        hour: '2-digit',
                        minute: '2-digit',
                    })}
                </span>
            </div>

            <div className="todo-item__actions">
                <button type="button" className="todo-item__action" onClick={() => onToggle(todo.id)}>
                    {todo.completed ? 'Reabrir' : 'Completar'}
                </button>
                <button type="button" className="todo-item__action" onClick={() => onRemove(todo.id)}>
                    Eliminar
                </button>
            </div>
        </article>
    )
}