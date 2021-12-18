import { BrowserRouter, Switch, Route } from "react-router-dom";
import AuthHome from "../pages/Auth/Home";
import Home from "../pages/Home";
import UserLogin from "../pages/Auth/UserLogin";
import CheckToken from "./checkToken";
import AdminLogin from "../pages/Auth/AdminLogin";

function Router() {
    return (
        <>
            <Switch>
                <Route exact path="/" component={AuthHome} />
                <Route path="/signin/admin" component={AdminLogin} />
                <Route path="/signin/user" component={UserLogin} />
                <Route path="/signup" component={AuthHome} />
                <CheckToken>
                    <Route path="/user/home" component={Home} />
                </CheckToken>
            </Switch>
        </>
    )

}



export default Router;