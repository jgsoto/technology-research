import { Flex, Text } from "@chakra-ui/react";
import { CheckboxAtom } from "../atoms/CheckboxAtom";
import { ButtonAtom } from "../atoms/ButtonAtom";

interface TodoItemProps {
    title: string;
    isCompleted: boolean;
    onToggle: () => void;
    onDeleteClick: () => void;
}

export const TodoItem = ({ title, isCompleted, onToggle, onDeleteClick }: TodoItemProps) => {
    return (
        <Flex
            align="center"
            justify="space-between"
            p={3}
            borderWidth="1px"
            borderRadius="md"
            width="100%"
        >
            <CheckboxAtom isChecked={isCompleted} onChange={onToggle}>
                <Text as={isCompleted ? "s" : "span"} color={isCompleted ? "gray.400" : "inherit"}>
                    {title}
                </Text>
            </CheckboxAtom>
            <ButtonAtom label="Delete" colorScheme="red" size="sm" onClick={onDeleteClick} />
        </Flex>
    );
};