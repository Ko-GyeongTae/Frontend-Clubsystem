import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthHome from "../pages/AuthHome";
import Home from "../pages/Home";

function AuthRouter(props: any) {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AuthHome />} />
                <Route path="/signin" element={<AuthHome />} />
                <Route path="/signup" element={<AuthHome />} />
            </Routes>
        </BrowserRouter>
    );
}

function MainRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/home" element={<Home/>}/>
            </Routes>
        </BrowserRouter>
    )
}

function Router(props: any) {
    if(props.isLogin) return <MainRouter/>
    else return <AuthRouter callback={props.callback}/>
}



export default Router;