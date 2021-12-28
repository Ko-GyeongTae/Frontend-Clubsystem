import { Switch, Route, Redirect } from "react-router-dom";
import AuthHome from "../pages/Auth/Home";
import AdminHome from "../pages/Admin/Home"
import UserLogin from "../pages/Auth/UserLogin";
import AdminLogin from "../pages/Auth/AdminLogin";
import UserHome from "../pages/User/Home";
import Signup from "../pages/Auth/Signup";

/*
const baseURL = process.env.baseURL;

const validateType = async () => {
    await axios.get(baseURL + '/auth/type', { 
      headers: { 
        'Authorization': "Bearer " + getAccessToken() 
      } 
    })
    .then(res => {
      console.log(res.data);
    })
    .catch(e => {
      console.log(e);
    })
  }
*/
const LoggedOutRoutes = () => (
    <Switch>
        <Route exact path="/" component={AuthHome} />
        <Route path="/signin/admin" component={AdminLogin} />
        <Route path="/signin/user" component={UserLogin} />
        <Route path="/signup" component={Signup} />
        <Redirect from="*" to="/"/>
    </Switch>
)

const LoggedInRoutes = () => (
    <Switch>
        <Route exact path="/" component={UserHome} />
        <Route path="/admin" component={AdminHome} />
        <Redirect from="*" to="/"/>
    </Switch>
)

const Router = ({isLoggedIn}: any) => (
    !isLoggedIn ? <LoggedOutRoutes/> : <LoggedInRoutes/>
)

export default Router;