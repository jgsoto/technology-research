import { ChakraProvider } from "@chakra-ui/react";
import { TodoLayout } from "./components/templates/TodoLayout";
import { TodoForm } from "./components/molecules/TodoForm";
import { FilterTabs } from "./components/organisms/FilterTabs";
import { TodoList } from "./components/organisms/TodoList";
import { todoStore } from "./store/TodoStore";

export const App = () => {
  const handleAddTodo = (title: string) => {
    todoStore.addTodo(title);
  };

  return (
    <ChakraProvider>
      <TodoLayout
        form={<TodoForm onAddTodo={handleAddTodo} />}
        filters={<FilterTabs />}
        list={<TodoList />}
      />
    </ChakraProvider>
  );
};