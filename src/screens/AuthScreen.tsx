import Container from "@material-ui/core/Container";
import { ChangeEventHandler, useState } from "react";
import { useLocation, withRouter } from "react-router-dom";

const AuthScreen = () => {
    const currentPath = useLocation();
    const authFlag = currentPath.pathname === "/signin" ? 0 : 1;

    const initialData = {
        name: "",
        nameError: false,

        username: "",
        usernameError: false,

        email: "",
        emailError: false,

        password: "",
        passwordError: false,

        confirmationPassword: "",
        confirmationPasswordError: false,
    };
    const [userInput, setUserInput] = useState(initialData);

    const handleUserInput: ChangeEventHandler<HTMLInputElement> = (e) => {
        setUserInput({
            ...userInput,
            [e.target.id]: e.target.value,
        });
    };

    return (
        <Container maxWidth="sm" className="h-full py-14 overflow-hidden">
            <h1 className="text-5xl mt-11">
                {authFlag ? "Sign Up" : "Sign In"}
            </h1>

            {authFlag ? (
                <div className="my-7">
                    <label htmlFor="name">Name</label>
                    <input
                        id="name"
                        type="text"
                        onChange={handleUserInput}
                        value={userInput.name}
                        className="block w-full px-4 py-2 mt-2 rounded-md focus:outline-none"
                        autoFocus
                        required
                    />
                    {userInput.nameError && (
                        <p className="my-2 todo_input_helper_text">
                            Please enter Name
                        </p>
                    )}
                </div>
            ) : (
                <></>
            )}

            <div className="my-7">
                <label htmlFor="username">Username</label>
                <input
                    id="username"
                    type="text"
                    onChange={handleUserInput}
                    value={userInput.username}
                    className="block w-full px-4 py-2 mt-2 rounded-md focus:outline-none"
                    required
                />
                {userInput.usernameError && (
                    <p className="my-2 todo_input_helper_text">
                        Please enter Username
                    </p>
                )}
            </div>

            {authFlag ? (
                <div className="my-7">
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        type="text"
                        onChange={handleUserInput}
                        value={userInput.email}
                        className="block w-full px-4 py-2 mt-2 rounded-md focus:outline-none"
                        required
                    />
                    {userInput.emailError && (
                        <p className="my-2 todo_input_helper_text">
                            Please enter Email
                        </p>
                    )}
                </div>
            ) : (
                <></>
            )}

            <div className="my-7">
                <label htmlFor="password">Password</label>
                <input
                    id="password"
                    type="password"
                    onChange={handleUserInput}
                    value={userInput.password}
                    className="block w-full px-4 py-2 mt-2 rounded-md focus:outline-none"
                    required
                />
                {userInput.passwordError && (
                    <p className="my-2 todo_input_helper_text">
                        Please enter Password
                    </p>
                )}
            </div>

            {authFlag ? (
                <div className="my-7">
                    <label htmlFor="confirmationPassword">
                        Confirm Password
                    </label>
                    <input
                        id="confirmationPassword"
                        type="text"
                        onChange={handleUserInput}
                        value={userInput.confirmationPassword}
                        className="block w-full px-4 py-2 mt-2 rounded-md focus:outline-none"
                        required
                    />
                    {userInput.confirmationPasswordError && (
                        <p className="my-2 todo_input_helper_text">
                            Please enter Confirmation Password
                        </p>
                    )}
                </div>
            ) : (
                <></>
            )}

            <button className="flex items-center px-2 py-2 font-medium tracking-wide capitalize transition-colors duration-200 transform rounded-md focus:outline-none auth_button">
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
                        d="M5 13l4 4L19 7"
                    />
                </svg>
                <span className="mx-1">Save</span>
            </button>
        </Container>
    );
};

export default withRouter(AuthScreen);
