import { ThemeProvider, Paper } from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";
import { useContext } from "react";
import Navbar from "./components/Navbar";
import { ThemeContext } from "./contexts/ThemeContext";
import HomeScreen from "./screens/HomeScreen";

const App = () => {
    const { theme } = useContext(ThemeContext);

    const appliedTheme = createMuiTheme({
        palette: {
            type: theme === "light" ? "light" : "dark",
        },
    });

    return (
        <ThemeProvider theme={appliedTheme}>
            <Paper elevation={0} square className="h-screen">
                <Navbar />
                <HomeScreen />
            </Paper>
        </ThemeProvider>
    );
};

export default App;
