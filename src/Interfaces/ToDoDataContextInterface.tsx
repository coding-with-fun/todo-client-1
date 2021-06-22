export interface ToDoItem {
    id: number;
    isCompleted: boolean;
    title: string;
}

export interface ToDoDataContextProps {
    todoList: ToDoItem[];
    isModalOpen: boolean;
    addToDo: (data: ToDoItem) => void;
    handleToggleModal: () => void;
    toggleToDoComplete: (index: number) => void;
    deleteToDoItem: (index: number) => void;
}
