import Container from "@material-ui/core/Container";
import { useLocation, withRouter } from "react-router-dom";

const AuthScreen = () => {
    const currentPath = useLocation();
    const authFlag = currentPath.pathname === "/signin" ? 0 : 1;

    return (
        <Container maxWidth="sm" className="h-full py-14 overflow-hidden">
            <h1>Auth Screen</h1>

            {authFlag ? "Sign Up" : "Sign In"}
        </Container>
    );
};

export default withRouter(AuthScreen);
