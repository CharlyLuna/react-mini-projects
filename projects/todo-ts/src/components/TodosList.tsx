import type { Todo, TodoId } from "../interfaces/todos";
import { TodoItem } from "./TodoItem";

interface Props {
  todos: Todo[];
  onRemove: ({ id }: TodoId) => void;
  onCompleted: ({ id, completed }: Pick<Todo, "id" | "completed">) => void;
}

export const TodosList = ({ todos, onRemove, onCompleted }: Props) => {
  return (
    <ul className='todo-list'>
      {todos.map((todo) => (
        <li key={todo.id} className={`${todo.completed ? "completed" : ""}`}>
          <TodoItem {...todo} handleRemove={onRemove} handleCompleted={onCompleted} />
        </li>
      ))}
    </ul>
  );
};
