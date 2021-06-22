export interface ToDoDataContextProps {
    todoList: object[];
    isModalOpen: boolean;
    addToDo: (data: object) => void;
    handleToggleModal: () => void;
}
