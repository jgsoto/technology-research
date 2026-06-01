import { type TodoFilter } from '../../store/TodoStore'

const filterOptions: Array<{ label: string; value: TodoFilter }> = [
    { label: 'Todas', value: 'all' },
    { label: 'Activas', value: 'active' },
    { label: 'Completadas', value: 'completed' },
]

type FilterTabsProps = {
    currentFilter: TodoFilter
    onChange: (filter: TodoFilter) => void
}

export function FilterTabs({ currentFilter, onChange }: FilterTabsProps) {
    return (
        <div className="filter-tabs" role="tablist" aria-label="Filtros de tareas">
            {filterOptions.map((option) => (
                <button
                    key={option.value}
                    type="button"
                    className={
                        option.value === currentFilter
                            ? 'filter-tabs__button filter-tabs__button--active'
                            : 'filter-tabs__button'
                    }
                    aria-pressed={option.value === currentFilter}
                    onClick={() => onChange(option.value)}
                >
                    {option.label}
                </button>
            ))}
        </div>
    )
}