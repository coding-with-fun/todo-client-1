import { createContext, FC, useState } from "react";
import {
    ToDoDataContextProps,
    ToDoItem,
} from "../Interfaces/ToDoDataContextInterface";

const defaultToDoDataContextValues: ToDoDataContextProps = {
    todoList: [],
    searchedTodoList: [],
    isListSearched: false,
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
    const [searchedTodoList, setSearchedTodoList] = useState(
        defaultToDoDataContextValues.todoList
    );
    const [isListSearched, setIsListSearched] = useState(
        defaultToDoDataContextValues.isListSearched
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

    const searchToDo = (value: string) => {
        const localToDoList = [...todoList];
        let sortedList = [];

        sortedList = localToDoList.filter((todo) => todo.title.includes(value));
        setSearchedTodoList(sortedList);
        setIsListSearched(Boolean(value));
    };

    return (
        <ToDoDataContext.Provider
            value={{
                todoList,
                searchedTodoList,
                isListSearched,
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
