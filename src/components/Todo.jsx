import { useState } from "react";
import uuid from "react-uuid";

import Form from "./Form";
import TodoList from "./TodoList";
const Todo = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <>
      <div className="w-10/10 md:w-2/4 md:mx-auto ml-2 mr-2 mt-10 bg-[#1E293B] md:p-4 p-3 rounded-md text-yellow-50">
        <h1 className="text-2xl font-bold text-center items-center">Todo List</h1>
        <Form
          inputValue={inputValue}
          setInputValue={setInputValue}
          todos={todos}
          setTodos={setTodos}
        />
        <div>
          <TodoList todos={todos} setTodos={setTodos}/>
        </div>
      </div>
    </>
  );
};

export default Todo;
