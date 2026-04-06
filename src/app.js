import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";

//Header component importing
import Header from "./components/Header";

//importing Body component
import Body from "./components/Body";


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

 const root=ReactDOM.createRoot(document.getElementById("root"));
 root.render(<AppLayout/>); 