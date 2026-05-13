import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";

//Header component importing
import Header from "./components/Header";

//importing Body component
import Body from "./components/Body";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import About from "./components/About";
import Contact from "./components/Contact";
import ErrorComponent from "./components/ErrorComponent";


 const Search=()=>{
    return(
        <div>
        <h4>Search</h4>
        </div>
    )
 };
 const AppLayout =()=>{
    return(
        <div className="app">
            <Header/>
            <Body/>

        </div>


    )
 };

 const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        errorElement:<ErrorComponent/>,
    },
    {
        path:"/about",
        element:<About/> ,

    },
    {
        path:"/contact",
        element:<Contact/>,
    }
 ]);

 const root=ReactDOM.createRoot(document.getElementById("root"));
 root.render(<RouterProvider router={appRouter} />);