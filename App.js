import React from "react";
import ReactDOM , {createRoot} from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Error from "./components/Error";
import Contact from "./components/Contact";
import {createBrowserRouter,RouterProvider,ErrorResponse, Outlet} from "react-router-dom";
import LoginInputs from "./components/LoginInputs";
import ProtectedRoute from "./components/ProtectedRoute";
import CheckLoggedIn from "./components/CheckLoggedIn";
import Userpage from "./components/Userpage";
import About from "./components/About";
const App=()=>{
    return (
        <>
        <CheckLoggedIn />
       <Header />
       <Outlet />
        </>      
    );
};

const router=createBrowserRouter([
    {
        path:"/",
        element:<App />,
        errorElement:<Error />,
        children:[
        { path: "/",        element:<Body /> },
        { path:"/userpage", element:<ProtectedRoute component={Userpage}/>},
        { path:"/about",    element:<About /> },
        { path:"/contact",  element:<Contact /> },
        ],
    },
]
)

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(

<RouterProvider router={router} />

);