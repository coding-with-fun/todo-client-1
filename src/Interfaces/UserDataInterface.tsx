export interface UserContextProps {
    isUserAuthenticated: boolean;
    handleUserAuthentication: (token: string) => void;
}
