import ReactDOM from "react-dom";
import App from "./App";
import ThemeProvider from "./contexts/ThemeContext";
import ToDoDataProvider from "./contexts/ToDoDataContext";
import UserProvider from "./contexts/UserContext";
import "./styles/index.scss";

ReactDOM.render(
    <ThemeProvider>
        <UserProvider>
            <ToDoDataProvider>
                <App />
            </ToDoDataProvider>
        </UserProvider>
    </ThemeProvider>,
    document.getElementById("root")
);
