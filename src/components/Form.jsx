import React from "react";
import uuid from "react-uuid";

const Form = ({ inputValue, setInputValue, todos, setTodos }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, { id: uuid(), todo: inputValue, isDone: false }]);
    setInputValue("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"></div>
          <input
            value={inputValue}
            type="text"
            className="block w-full p-4 pl-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Add New Task"
            required
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button
            type="submit"
            className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
