import { useState } from "react";
import { TodosList } from "./components/TodosList";
import type { Todo } from "./interfaces/todos";

const MOCK_TODOS: Todo[] = [
  { id: "1", title: "todo1", completed: false },
  { id: "2", title: "todo2", completed: true },
  { id: "3", title: "todo3", completed: false },
];

function App() {
  const [todos, setTodos] = useState(MOCK_TODOS);

  const handleRemove = (id: string) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  return (
    <div className='todoapp'>
      <TodosList todos={todos} onRemove={handleRemove} />
    </div>
  );
}

export default App;
