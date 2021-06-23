export interface ToDoItem {
    id: number;
    isCompleted: boolean;
    title: string;
}

export interface ToDoDataContextProps {
    todoList: ToDoItem[];
    searchedTodoList: ToDoItem[];
    isListSearched: boolean;
    isModalOpen: boolean;
    addToDo: (data: ToDoItem) => void;
    handleToggleModal: () => void;
    toggleToDoComplete: (index: number) => void;
    deleteToDoItem: (index: number) => void;
    searchToDo: (value: string) => void;
}
