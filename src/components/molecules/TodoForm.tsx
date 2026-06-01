import { useReducer } from "react";
import type { FormEvent } from 'react'
import { Flex } from "@chakra-ui/react";
import { InputAtom } from "../atoms/InputAtom";
import { ButtonAtom } from "../atoms/ButtonAtom";

interface FormState {
    title: string;
    isInvalid: boolean;
}

type FormAction =
    | { type: "SET_TITLE"; payload: string }
    | { type: "SET_INVALID"; payload: boolean }
    | { type: "RESET" };

const formReducer = (state: FormState, action: FormAction): FormState => {
    switch (action.type) {
        case "SET_TITLE":
            return { ...state, title: action.payload, isInvalid: false };
        case "SET_INVALID":
            return { ...state, isInvalid: action.payload };
        case "RESET":
            return { title: "", isInvalid: false };
        default:
            return state;
    }
};

interface TodoFormProps {
    onAddTodo: (title: string) => void;
}

export const TodoForm = ({ onAddTodo }: TodoFormProps) => {
    const [state, dispatch] = useReducer(formReducer, { title: "", isInvalid: false });

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        if (!state.title.trim()) {
            dispatch({ type: "SET_INVALID", payload: true });
            return;
        }
        onAddTodo(state.title);
        dispatch({ type: "RESET" });
    };

    return (
        <Flex as="form" onSubmit={handleSubmit} gap={2} width="100%">
            <InputAtom
                placeholder="Add a new task..."
                value={state.title}
                onChange={(e) => dispatch({ type: "SET_TITLE", payload: e.target.value })}
            />
            <ButtonAtom label="Add" colorScheme="teal" type="submit" />
        </Flex>
    );
};