import { useContext } from "react";
import { useLocation, Link } from "react-router-dom";
import { ThemeContext } from "../contexts/ThemeContext";
import { ToDoDataContext } from "../contexts/ToDoDataContext";

const Navbar = () => {
    const { theme, handleToggleTheme } = useContext(ThemeContext);
    const { handleToggleModal } = useContext(ToDoDataContext);

    const userToken = localStorage.getItem("todo-user-token");

    const currentPath = useLocation();
    const authFlag = currentPath.pathname === "/signin" ? 0 : 1;

    return (
        <nav className="w-screen shadow-lg fixed top-0">
            <div className="container flex items-center justify-between mx-auto capitalize h-14">
                <div
                    className="flex items-center justify-end ml-1.5 sm:ml-6 cursor-pointer"
                    onClick={handleToggleTheme}
                >
                    {theme === "dark" ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                            />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                            />
                        </svg>
                    )}
                </div>
                <div className="flex items-center justify-end">
                    {userToken ? (
                        <>
                            <span
                                className="mx-1.5 sm:mx-6 cursor-pointer sm:hidden block"
                                onClick={handleToggleModal}
                            >
                                add new todo
                            </span>

                            <span className="mx-1.5 sm:mx-6 cursor-pointer">
                                sign out
                            </span>
                        </>
                    ) : authFlag ? (
                        <Link to="/signin">Sign In</Link>
                    ) : (
                        <Link to="/signup">Sign Up</Link>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
