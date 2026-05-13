//header component
//import useState
import { useState } from "react";
//import logo file
import { LOGO_URL } from "../utils/constants";
//importing  link component
import {Link} from "react-router-dom";


const Header=()=>{
    let btnName="Login";

  
  const [btnNameReact, setBtnNameReact] = useState("Login");

    return(
        <div className="header">
            <div className="logo">
                <img src={LOGO_URL} alt="logo" />
            </div>
            <div className="navItems">
                <ul>
                    <li >
                        <Link to="/">Home</Link>
                    </li>
                     <li>
                        <Link to="/about" >About Us</Link>
                    </li>
                    <li>
                        <Link to="/contact" >Contact Us</Link>
                    </li>
                     <li>
                        <Link to="/cart"> Cart</Link>
                    </li>
                    
                    <button
                    className="login"
                    onClick={()=>{
                        btnNameReact=="Login"
                        ? setBtnNameReact("Logout")
                        : setBtnNameReact("Login");
                    }}
                    >
                        {btnNameReact}
                                                       
                     </button>                
                </ul>
            </div>
        </div>
    );
      
 };

 export default Header;