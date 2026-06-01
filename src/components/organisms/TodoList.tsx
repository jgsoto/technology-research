import { useRef, useState } from "react";
import { Stack, Text } from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import { todoStore } from "../../store/TodoStore";
import { TodoItem } from "../molecules/TodoItem";
import { ConfirmModal } from "../molecules/ConfirmModal";
import type { ConfirmModalRef } from "../molecules/ConfirmModal";

export const TodoList = observer(() => {
    const modalRef = useRef<ConfirmModalRef>(null);
    const [selectedTodoId, setSelectedTodoId] = useState<string | null>(null);

    const handleToggle = (id: string) => {
        todoStore.toggleTodo(id);
    };

    const handleDeleteClick = (id: string) => {
        setSelectedTodoId(id);
        modalRef.current?.open();
    };

    const handleConfirmDelete = () => {
        if (selectedTodoId) {
            todoStore.deleteTodo(selectedTodoId);
            setSelectedTodoId(null);
        }
    };

    return (
        <Stack gap={3} width="100%">
            {todoStore.filteredTodos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    title={todo.title}
                    isCompleted={todo.isCompleted}
                    onToggle={() => handleToggle(todo.id)}
                    onDeleteClick={() => handleDeleteClick(todo.id)}
                />
            ))}

            {todoStore.filteredTodos.length === 0 && (
                <Text color="gray.500" py={4}>No tasks found.</Text>
            )}

            <ConfirmModal ref={modalRef} onConfirm={handleConfirmDelete} />
        </Stack>
    );
});