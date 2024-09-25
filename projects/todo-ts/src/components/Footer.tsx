import { TodoFilters } from "../interfaces/todos";
import { Filters } from "./Filters";

interface Props {
  remainingTodos: number;
  completedTodos: number;
  filterSelected: TodoFilters;
  handleFilterChange: (filter: TodoFilters) => void;
  clearCompleted: () => void;
}

export const Footer = ({
  remainingTodos,
  clearCompleted,
  completedTodos,
  filterSelected,
  handleFilterChange,
}: Props) => {
  return (
    <footer className='footer'>
      <span className='todo-count'>
        <strong>{remainingTodos}</strong> items left
      </span>
      <Filters filterSelected={filterSelected} onFilterChange={handleFilterChange} />
      {completedTodos > 0 && (
        <button className='clear-completed' onClick={clearCompleted}>
          Clear completed
        </button>
      )}
    </footer>
  );
};
