import { useState } from 'react'
import type { FormEvent } from 'react'
import { CustomButton } from '../atoms/CustomButton'
import { CustomInput } from '../atoms/CustomInput'

type TodoFormProps = {
    onSubmit: (title: string) => void
}

export function TodoForm({ onSubmit }: TodoFormProps) {
    const [value, setValue] = useState('')

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        onSubmit(value)
        setValue('')
    }

    return (
        <form className="todo-form panel" onSubmit={handleSubmit}>
            <CustomInput
                value={value}
                onChange={(event) => setValue(event.target.value)}
                placeholder="Escribe una nueva tarea"
                aria-label="Nueva tarea"
            />
            <CustomButton type="submit" disabled={!value.trim()}>
                Agregar tarea
            </CustomButton>
        </form>
    )
}