import { Redirect, Route, Switch } from "react-router-dom";
import AuthScreen from "../screens/AuthScreen";
import HomeScreen from "../screens/HomeScreen";

const WrappedRouter = () => {
    const userToken = localStorage.getItem("todo-user-token");

    return userToken ? (
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
