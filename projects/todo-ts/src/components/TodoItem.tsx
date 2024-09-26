import { useEffect, useRef, useState } from "react";
import { Todo, TodoId } from "../interfaces/todos";

interface Props extends Todo {
  handleRemove: ({ id }: TodoId) => void;
  handleCompleted: ({ id, completed }: Pick<Todo, "id" | "completed">) => void;
  handleTitleChange: ({ id, title }: Pick<Todo, "id" | "title">) => void;
  handleEditing: (id: string) => void;
  isEditing: string;
}

export const TodoItem = ({
  completed,
  id,
  title,
  handleRemove,
  handleCompleted,
  handleTitleChange,
  handleEditing,
  isEditing,
}: Props) => {
  const [editedTitle, setEditedTitle] = useState(title);
  const inputEditTitle = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputEditTitle.current?.focus();
  }, [isEditing]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEditedTitle(editedTitle.trim());

    if (editedTitle !== title) {
      handleTitleChange({ id, title: editedTitle });
    }

    if (editedTitle === "") handleRemove({ id });

    handleEditing("");
  };

  return (
    <>
      <div className='view'>
        <input
          id={id}
          name={title}
          className='toggle'
          checked={completed}
          type='checkbox'
          onChange={(e) => handleCompleted({ id, completed: e.target.checked })}
        />

        <label htmlFor={title}>{title}</label>
        <button className='destroy' onClick={() => handleRemove({ id })} />
      </div>

      <form onSubmit={handleSubmit}>
        <input
          type='text'
          className='edit'
          onBlur={() => handleEditing("")}
          placeholder={title}
          value={editedTitle}
          onChange={(e) => setEditedTitle(e.target.value)}
          ref={inputEditTitle}
        />
      </form>
    </>
  );
};
