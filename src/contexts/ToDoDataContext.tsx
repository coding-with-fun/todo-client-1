import { createContext, FC, useState } from "react";
import { ToDoDataContextProps } from "../Interfaces/ToDoDataContextInterface";

const defaultToDoDataContextValues: ToDoDataContextProps = {
    todoList: [],
    isModalOpen: false,
    addToDo: () => {},
    handleToggleModal: () => {},
};

export const ToDoDataContext = createContext<ToDoDataContextProps>(
    defaultToDoDataContextValues
);

const ToDoDataProvider: FC = ({ children }) => {
    const [todoList, setTodoList] = useState(
        defaultToDoDataContextValues.todoList
    );
    const [isModalOpen, setIsModalOpen] = useState(
        defaultToDoDataContextValues.isModalOpen
    );

    const handleToggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const addToDo = (data: object) => {
        setTodoList([...todoList, data]);
    };

    return (
        <ToDoDataContext.Provider
            value={{
                todoList,
                isModalOpen,

                handleToggleModal,
                addToDo,
            }}
        >
            {children}
        </ToDoDataContext.Provider>
    );
};

export default ToDoDataProvider;
