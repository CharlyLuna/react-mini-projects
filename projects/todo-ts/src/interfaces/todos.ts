import { TODO_FILTERS } from "../helpers/constants";

export interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

export type TodoId = Pick<Todo, "id">;
export type TodoTitle = Pick<Todo, "title">;
export type TodoFilters = (typeof TODO_FILTERS)[keyof typeof TODO_FILTERS];
