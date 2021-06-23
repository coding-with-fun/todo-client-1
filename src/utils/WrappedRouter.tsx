import { useContext } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import AuthScreen from "../screens/AuthScreen";
import HomeScreen from "../screens/HomeScreen";

const WrappedRouter = () => {
    const { isUserAuthenticated } = useContext(UserContext);

    return isUserAuthenticated ? (
        <Switch>
            <Route exact path="/" component={HomeScreen} />
            <Redirect to="/" />
        </Switch>
    ) : (
        <Switch>
            <Route exact path="/signin" component={AuthScreen} />
            <Route exact path="/signup" component={AuthScreen} />
            <Redirect to="/signin" />
        </Switch>
    );
};

export default WrappedRouter;
