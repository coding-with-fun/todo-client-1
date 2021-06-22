import ReactDOM from "react-dom";
import App from "./App";
import ThemeProvider from "./contexts/ThemeContext";
import ToDoDataProvider from "./contexts/ToDoDataContext";
import "./styles/index.scss";

ReactDOM.render(
    <ThemeProvider>
        <ToDoDataProvider>
            <App />
        </ToDoDataProvider>
    </ThemeProvider>,
    document.getElementById("root")
);
