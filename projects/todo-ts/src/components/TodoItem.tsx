import { Todo, TodoId } from "../interfaces/todos";

interface Props extends Todo {
  handleRemove: ({ id }: TodoId) => void;
  handleCompleted: ({ id, completed }: Pick<Todo, "id" | "completed">) => void;
}

export const TodoItem = ({ completed, id, title, handleRemove, handleCompleted }: Props) => {
  return (
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
  );
};
