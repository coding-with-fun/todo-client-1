import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.scss";
import App from "./App";
import ThemeProvider from "./contexts/ThemeContext";
import ToDoDataProvider from "./contexts/ToDoDataContext";

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider>
            <ToDoDataProvider>
                <App />
            </ToDoDataProvider>
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
