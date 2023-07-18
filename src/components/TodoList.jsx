import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaCheckCircle } from "react-icons/fa";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { toast } from 'react-toastify';

const TodoList = ({ todos, setTodos }) => {
  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    toast.warn('😢 Task has been Deleted!');
  };

  const handleComplete = (todo) => {
    todo.isDone = !todo.isDone;
    setTodos([...todos]);
    toast.success('👌 Task has been Completed!');
    

  };

  const incompleteTodos = todos.filter((todo) => !todo.isDone);
  const completeTodos = todos.filter((todo) => todo.isDone);
  return (
    <>
      <div className="w-full mx-auto mt-5 bg-[#1E293B] p-4 rounded-md text-yellow-50 text-justify">
      {
        incompleteTodos.length > 0 &&  (
          <h1 className="text-2xl font-bold text-center items-center">
           Pending Tasks
          </h1>
        )
      }
        
        <ul className="max-w-md  text-white dark:divide-gray-700">
          {incompleteTodos.map((todo) => (
            <li className="text-red-950 text-3xl pb-3 sm:pb-4 pt-2"
              key={todo.id}
            >
              <div className="flex items-center space-x-4">
                <div className="flex-1 min-w-0">
                  <p
                    className={`${
                      todo.isDone ? " dark:text-red-500" : ""
                    } text-xl font-medium text-gray-900  dark:text-white`}
                  >
                    {todo.todo}
                  </p>
                </div>
                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                  <FaCheckCircle
                    className="ml-2 cursor-pointer"
                    onClick={() => {
                      handleComplete(todo);
                    }}
                  />
                  <FontAwesomeIcon
                    className="ml-2 cursor-pointer"
                    icon={faTrash}
                    onClick={() => {
                      handleDelete(todo.id);
                    }}
                  />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {completeTodos.length > 0 && (
        <div className="w-full mx-auto mt-5 bg-[#1E293B] p-4 rounded-md text-yellow-50 text-justify">
          <h1 className="text-2xl font-bold text-center items-center">
            Completed Tasks
          </h1>
          <ul className="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
            {completeTodos.map((todo) => (
              <li
                className={`${
                  todo.isDone ? " line-through text-3xl" : ""
                } pb-3 sm:pb-4 pt-2`}
                key={todo.id}
              >
                <div className="flex items-center space-x-4">
                  <div className="flex-1 min-w-0">
                    <p
                      className=" dark:text-red-500 text-sm font-medium text-gray-900 "
                    >
                      {todo.todo}
                    </p>
                  </div>
                  <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    <FontAwesomeIcon
                      className="ml-2 cursor-pointer"
                      icon={faTrash}
                      onClick={() => {
                        handleDelete(todo.id);
                      }}
                    />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default TodoList;
