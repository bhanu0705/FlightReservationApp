import React from "react";
import ReactDOM , {createRoot} from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import {createBrowserRouter,RouterProvider,ErrorResponse, Outlet} from "react-router-dom";
const App=()=>{
    return (
        <>
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
        children:[{
          path:"/",
          element:<Body />,
        },
            {
                path:"/about/:id",
                element:<About />
            },{
                path:"/contact",
                element:<Contact />
            }
        ],
    },
]
)

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);