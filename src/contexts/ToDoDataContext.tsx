import { createContext, FC, useState } from "react";
import {
    ToDoDataContextProps,
    ToDoItem,
} from "../Interfaces/ToDoDataContextInterface";

const defaultToDoDataContextValues: ToDoDataContextProps = {
    todoList: [],
    isModalOpen: false,
    addToDo: () => {},
    handleToggleModal: () => {},
    toggleToDoComplete: () => {},
    deleteToDoItem: () => {},
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

    const addToDo = (data: ToDoItem) => {
        setTodoList([...todoList, data]);
    };

    const toggleToDoComplete = (index: number) => {
        const localToDoList = [...todoList];

        localToDoList[index].isCompleted = !localToDoList[index].isCompleted;
        setTodoList(localToDoList);
    };

    const deleteToDoItem = (index: number) => {
        const localToDoList = [...todoList];

        localToDoList.splice(index, 1);
        setTodoList(localToDoList);
    };

    return (
        <ToDoDataContext.Provider
            value={{
                todoList,
                isModalOpen,

                handleToggleModal,
                addToDo,
                toggleToDoComplete,
                deleteToDoItem,
            }}
        >
            {children}
        </ToDoDataContext.Provider>
    );
};

export default ToDoDataProvider;
