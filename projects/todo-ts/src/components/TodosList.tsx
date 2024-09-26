import { useState } from "react";
import type { Todo, TodoId } from "../interfaces/todos";
import { TodoItem } from "./TodoItem";

interface Props {
  todos: Todo[];
  onRemove: ({ id }: TodoId) => void;
  onCompleted: ({ id, completed }: Pick<Todo, "id" | "completed">) => void;
  handleTitleChange: ({ id, title }: Pick<Todo, "id" | "title">) => void;
}

export const TodosList = ({ todos, onRemove, onCompleted, handleTitleChange }: Props) => {
  const [isEditing, setIsEditing] = useState("");

  const handleEditingChange = (id: string) => {
    setIsEditing(id);
  };

  return (
    <ul className='todo-list'>
      {todos.map((todo) => (
        <li
          onDoubleClick={() => setIsEditing(todo.id)}
          key={todo.id}
          className={`${todo.completed ? "completed" : ""} ${
            isEditing === todo.id ? "editing" : ""
          }`}
        >
          <TodoItem
            {...todo}
            handleRemove={onRemove}
            handleCompleted={onCompleted}
            handleTitleChange={handleTitleChange}
            isEditing={isEditing}
            handleEditing={handleEditingChange}
          />
        </li>
      ))}
    </ul>
  );
};
