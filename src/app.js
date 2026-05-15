import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";

//Header component importing
import Header from "./components/Header";

//importing Body component
import Body from "./components/Body";


import About from "./components/About";
import Contact from "./components/Contact";
import ErrorComponent from "./components/ErrorComponent";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";


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
            <Outlet/>

        </div>


    )
 };

 const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
       children: [
  {
    index: true,
    element: <Body />
  },
  {
    path: "about",
    element: <About />
  },
  {
    path: "contact",
    element: <Contact />
  },
 {
  path: "restaurants/:resId",
  element: <RestaurantMenu />
}
],
        errorElement:<ErrorComponent/>,
    },
    
 ]);

 const root=ReactDOM.createRoot(document.getElementById("root"));
 root.render(<RouterProvider router={appRouter} />);