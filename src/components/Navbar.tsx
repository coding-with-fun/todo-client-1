import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const Navbar = () => {
    const { theme, handleToggleTheme } = useContext(ThemeContext);

    console.log(theme);
    return (
        <div>
            <h1 onClick={handleToggleTheme}>Navbar</h1>
        </div>
    );
};

export default Navbar;
