import { TodoTitle } from "../interfaces/todos";
import { CreateTodo } from "./CreateTodo";

interface Props {
  onAdd: ({ title }: TodoTitle) => void;
}

export const Header = ({ onAdd }: Props) => {
  return (
    <header className='header'>
      <h1>TODO</h1>
      <CreateTodo onAdd={onAdd} />
    </header>
  );
};
