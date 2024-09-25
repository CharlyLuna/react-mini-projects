import { FILTER_BUTTONS } from "../helpers/constants";
import { TodoFilters } from "../interfaces/todos";

interface Props {
  filterSelected: TodoFilters;
  onFilterChange: (filter: TodoFilters) => void;
}

export const Filters = ({ filterSelected, onFilterChange }: Props) => {
  // const handleFilterChange = (filter: TodoFilters) => {};

  return (
    <ul className='filters'>
      <li>
        {Object.entries(FILTER_BUTTONS).map(([key, { href, text }]) => {
          const isSelected = filterSelected === key;
          return (
            <a
              className={isSelected ? "selected" : ""}
              key={key}
              href={href}
              onClick={(e) => {
                e.preventDefault();
                onFilterChange(key as TodoFilters);
              }}
            >
              {text}
            </a>
          );
        })}
      </li>
    </ul>
  );
};
