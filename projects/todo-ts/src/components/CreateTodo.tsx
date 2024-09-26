import React, { useState } from "react";
import { TodoTitle } from "../interfaces/todos";

interface Props {
  onAdd: ({ title }: TodoTitle) => void;
}

export const CreateTodo = ({ onAdd }: Props) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onAdd({ title: inputValue });
    setInputValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className='new-todo'
        autoFocus
        type='text'
        value={inputValue}
        placeholder='What needs to be done?'
        onChange={(e) => setInputValue(e.target.value)}
      />
    </form>
  );
};
