import type { ReactNode } from "react"

interface TodoLayoutProps {
    form: ReactNode
    filters: ReactNode
    list: ReactNode
}

export const TodoLayout = ({ form, filters, list }: TodoLayoutProps) => {
    return (
        <div className="todo-shell">
            <div className="todo-card">
                <header className="todo-hero">
                    <h1 className="todo-title">Chakra Todo App</h1>
                </header>

                <div className="todo-content">
                    {form}
                    {filters}
                    {list}
                </div>
            </div>
        </div>
    )
}