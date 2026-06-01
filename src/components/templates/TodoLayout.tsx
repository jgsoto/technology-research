import { FilterTabs } from '../molecules/FilterTabs'
import { TodoForm } from '../organisms/TodoForm'
import { TodoList } from '../organisms/TodoList'
import { useTodoStore } from '../../hooks/useTodoStore'

export function TodoLayout() {
    const { todos, filter, actions } = useTodoStore()

    const filteredTodos = todos.filter((todo) => {
        if (filter === 'active') {
            return !todo.completed
        }

        if (filter === 'completed') {
            return todo.completed
        }

        return true
    })

    const completedCount = todos.filter((todo) => todo.completed).length
    const activeCount = todos.length - completedCount

    return (
        <main className="app-shell">
            <section className="todo-layout">
                <header className="todo-layout__hero">
                    <div>
                        <p className="todo-layout__eyebrow">Atomic Design Starter</p>
                        <h1 className="todo-layout__title">Proyecto de React con estructura modular</h1>
                        <p className="todo-layout__summary">
                            Esta base ya separa átomos, moléculas, organismos y template. Más adelante puedes
                            cambiar el store por MobX y los estilos por Chakra sin rehacer la arquitectura.
                        </p>
                    </div>

                    <div className="todo-layout__stats" aria-label="Resumen de tareas">
                        <article className="stat-card">
                            <span className="stat-card__label">Totales</span>
                            <span className="stat-card__value">{todos.length}</span>
                        </article>
                        <article className="stat-card">
                            <span className="stat-card__label">Activas</span>
                            <span className="stat-card__value">{activeCount}</span>
                        </article>
                        <article className="stat-card">
                            <span className="stat-card__label">Completadas</span>
                            <span className="stat-card__value">{completedCount}</span>
                        </article>
                    </div>
                </header>

                <div className="todo-layout__body">
                    <TodoForm onSubmit={actions.addTodo} />

                    <div className="panel">
                        <FilterTabs currentFilter={filter} onChange={actions.setFilter} />
                    </div>

                    <TodoList
                        todos={filteredTodos}
                        onToggle={actions.toggleTodo}
                        onRemove={actions.removeTodo}
                    />
                </div>
            </section>
        </main>
    )
}