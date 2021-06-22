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
    searchToDo: () => {},
};

export const ToDoDataContext = createContext<ToDoDataContextProps>(
    defaultToDoDataContextValues
);

const ToDoDataProvider: FC = ({ children }) => {
    const [todoList, setTodoList] = useState(
        defaultToDoDataContextValues.todoList
    );
    const [todoListCopy, setTodoListCopy] = useState(
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
        setTodoListCopy([...todoList, data]);
    };

    const toggleToDoComplete = (index: number) => {
        const localToDoList = [...todoList];

        localToDoList[index].isCompleted = !localToDoList[index].isCompleted;
        setTodoList(localToDoList);
        setTodoListCopy(localToDoList);
    };

    const deleteToDoItem = (index: number) => {
        const localToDoList = [...todoList];

        localToDoList.splice(index, 1);
        setTodoList(localToDoList);
        setTodoListCopy(localToDoList);
    };

    const searchToDo = (value: string) => {
        const localToDoList = [...todoListCopy];
        let sortedList = [];

        sortedList = localToDoList.filter((todo) => todo.title.includes(value));
        setTodoList(sortedList);
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
                searchToDo,
            }}
        >
            {children}
        </ToDoDataContext.Provider>
    );
};

export default ToDoDataProvider;
