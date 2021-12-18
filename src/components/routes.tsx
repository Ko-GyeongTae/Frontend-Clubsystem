import { Switch, Route } from "react-router-dom";
import AuthHome from "../pages/Auth/Home";
import Home from "../pages/Home";
import UserLogin from "../pages/Auth/UserLogin";
import AdminLogin from "../pages/Auth/AdminLogin";

const LoggedOutRoutes = () => (
    <Switch>
        <Route exact path="/" component={AuthHome} />
        <Route path="/signin/admin" component={AdminLogin} />
        <Route path="/signin/user" component={UserLogin} />
        <Route path="/signup" component={AuthHome} />
    </Switch>
)

const LoggedInRoutes = () => (
    <Switch>
        <Route exact path="/" component={Home} />
    </Switch>
)

const Router = ({isLoggedIn}: any) => isLoggedIn ? <LoggedInRoutes/> : <LoggedOutRoutes/>


export default Router;