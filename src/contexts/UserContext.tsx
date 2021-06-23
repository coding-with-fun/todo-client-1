import { useState } from "react";
import { createContext, FC } from "react";
import { UserContextProps } from "../Interfaces/UserDataInterface";

const defaultUserContextValues: UserContextProps = {
    isUserAuthenticated: Boolean(localStorage.getItem("todo-user-token")),
    handleUserAuthentication: () => {},
};

export const UserContext = createContext<UserContextProps>(
    defaultUserContextValues
);

const UserProvider: FC = ({ children }) => {
    const [isUserAuthenticated, setIsUserAuthenticated] = useState(
        defaultUserContextValues.isUserAuthenticated
    );

    const handleUserAuthentication = (token: string) => {
        setIsUserAuthenticated(Boolean(token));
        console.log(Boolean(token), ">>>>>>>>>");
        localStorage.setItem("todo-user-token", token);
    };

    return (
        <UserContext.Provider
            value={{
                isUserAuthenticated,

                handleUserAuthentication,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;
