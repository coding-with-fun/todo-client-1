import { useContext } from "react";
import { ToDoDataContext } from "../../contexts/ToDoDataContext";

const ToDoList = () => {
    const { todoList, toggleToDoComplete, deleteToDoItem } =
        useContext(ToDoDataContext);

    return (
        <div className="overflow-y-scroll max-h-full pb-16 todo_list">
            {todoList.map((todo, index) => {
                return (
                    <div
                        key={todo.id}
                        className="flex items-center px-4 cursor-pointer sm:my-4 my-2 py-2 border-2 rounded-md"
                    >
                        <div
                            className={`${
                                todo.isCompleted ? "line-through" : ""
                            } flex-1`}
                            onClick={() => toggleToDoComplete(index)}
                        >
                            {todo.title}
                        </div>

                        <span onClick={() => deleteToDoItem(index)}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                />
                            </svg>
                        </span>
                    </div>
                );
            })}
        </div>
    );
};

export default ToDoList;
