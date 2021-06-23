import ReactGA from "react-ga";
import ReactDOM from "react-dom";
import App from "./App";
import ThemeProvider from "./contexts/ThemeContext";
import ToDoDataProvider from "./contexts/ToDoDataContext";
import UserProvider from "./contexts/UserContext";
import "./styles/index.scss";

ReactGA.initialize("276811078"); // add your tracking id here.
ReactGA.pageview(window.location.pathname + window.location.search);

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
