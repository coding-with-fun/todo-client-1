import { useContext } from "react";
import { ToDoDataContext } from "../../contexts/ToDoDataContext";

const SearchField = () => {
    const { searchToDo } = useContext(ToDoDataContext);

    return (
        <div className="py-2">
            <input
                type="text"
                className="w-full py-3 px-4 rounded-md focus:outline-none"
                placeholder="Search"
                onChange={(e) => searchToDo(e.target.value)}
            />
        </div>
    );
};

export default SearchField;
