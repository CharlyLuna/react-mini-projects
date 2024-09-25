import { Todo } from "../interfaces/todos";

interface Props extends Todo {
  handleRemove: (id: string) => void;
}

export const TodoItem = ({ completed, id, title, handleRemove }: Props) => {
  return (
    <div className='view'>
      <input id={id} name={title} className='toggle' checked={completed} type='checkbox' />
      <label htmlFor={title}>{title}</label>
      <button className='destroy' onClick={() => handleRemove(id)} />
    </div>
  );
};
