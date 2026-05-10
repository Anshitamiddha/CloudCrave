//header component
//import useState
import { useState } from "react";
//import logo file
import { LOGO_URL } from "../utils/constants";


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
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
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