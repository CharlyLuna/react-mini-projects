import type { Todo } from "../interfaces/todos";
import { TodoItem } from "./TodoItem";

interface Props {
  todos: Todo[];
  onRemove: (id: string) => void;
}

export const TodosList = ({ todos, onRemove }: Props) => {
  return (
    <ul className='todo-list'>
      {todos.map((todo) => (
        <li key={todo.id} className={`${todo.completed ? "completed" : ""}`}>
          <TodoItem {...todo} handleRemove={onRemove} />
        </li>
      ))}
    </ul>
  );
};
