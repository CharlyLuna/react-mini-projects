import { useState } from "react";
import { TodosList } from "./components/TodosList";
import type { Todo, TodoFilters, TodoId } from "./interfaces/todos";
import { TODO_FILTERS } from "./helpers/constants";
import { Footer } from "./components/Footer";

const MOCK_TODOS: Todo[] = [
  { id: "1", title: "todo1", completed: false },
  { id: "2", title: "todo2", completed: true },
  { id: "3", title: "todo3", completed: false },
];

function App() {
  const [todos, setTodos] = useState(MOCK_TODOS);
  const [filter, setFilter] = useState<TodoFilters>(TODO_FILTERS.ALL);

  const handleRemove = ({ id }: TodoId) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const handleCompleted = ({ id, completed }: Pick<Todo, "id" | "completed">) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) todo.completed = completed;
      return todo;
    });
    setTodos(newTodos);
  };

  const handleFilterChange = (filter: TodoFilters) => {
    setFilter(filter);
  };

  const handleRemoveAllCompleted = () => {
    const newTodos = todos.filter((todo) => !todo.completed);
    setTodos(newTodos);
  };

  const remainingTodos = todos.filter((todo) => !todo.completed).length;
  const completedTodos = todos.length - remainingTodos;
  const filteredTodos = todos.filter((todo) => {
    if (filter === TODO_FILTERS.ALL) return todo;
    return filter === TODO_FILTERS.ACTIVE ? !todo.completed : todo.completed;
  });

  return (
    <div className='todoapp'>
      <TodosList todos={filteredTodos} onRemove={handleRemove} onCompleted={handleCompleted} />
      <Footer
        clearCompleted={handleRemoveAllCompleted}
        completedTodos={completedTodos}
        filterSelected={filter}
        handleFilterChange={handleFilterChange}
        remainingTodos={remainingTodos}
      />
    </div>
  );
}

export default App;
