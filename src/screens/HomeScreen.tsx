import Container from "@material-ui/core/Container";
import SearchField from "../components/HomeScreen/SearchField";
import ToDoList from "../components/HomeScreen/ToDoList";

const HomeScreen = () => {
    return (
        <Container maxWidth="md" className="h-full py-14">
            <SearchField />
            <ToDoList />
        </Container>
    );
};

export default HomeScreen;
