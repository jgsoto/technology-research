import { Flex } from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import { todoStore } from "../../store/TodoStore";
import { ButtonAtom } from "../atoms/ButtonAtom";

export const FilterTabs = observer(() => {
    const handleFilterChange = (filterType: "all" | "active" | "completed") => {
        todoStore.setFilter(filterType);
    };

    return (
        <Flex gap={2} width="100%" justify="center" mb={4}>
            <ButtonAtom
                label="All"
                variant={todoStore.filter === "all" ? "solid" : "outline"}
                colorScheme="teal"
                onClick={() => handleFilterChange("all")}
            />
            <ButtonAtom
                label="Active"
                variant={todoStore.filter === "active" ? "solid" : "outline"}
                colorScheme="teal"
                onClick={() => handleFilterChange("active")}
            />
            <ButtonAtom
                label="Completed"
                variant={todoStore.filter === "completed" ? "solid" : "outline"}
                colorScheme="teal"
                onClick={() => handleFilterChange("completed")}
            />
        </Flex>
    );
});