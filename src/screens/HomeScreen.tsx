import Container from "@material-ui/core/Container";
import SearchField from "../components/HomeScreen/SearchField";
import AddToDo from "../components/HomeScreen/AddToDo";
import ToDoList from "../components/HomeScreen/ToDoList";

const HomeScreen = () => {
    return (
        <Container maxWidth="sm" className="h-full py-14 overflow-hidden">
            <SearchField />
            <ToDoList />

            <AddToDo />
        </Container>
    );
};

export default HomeScreen;
