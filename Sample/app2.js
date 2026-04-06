
 import React from "react";
 import ReactDOM from "react-dom/client";
 
 //jsx (transpiled before it reaches the JS engine) - Parcel- Babel(transpiler takes jsx and convert)
 const heading2 = (<h1 id="2"> 
                 Helllo jsx
                 </h1>);
 
 //React functional  component
 
 const ele=<span>React element</span>
 
 const title=(
  <h1>
     {ele} 
     Namastee from titlee
 </h1>)
 const HeadingComponent =()=>{
      return <h1> React component is a react function</h1>
 }
 
 
 //conponent composition
 const Learn=()=>{ //js
     return(       //jsx
     <>
         <HeadingComponent/>
     <div id="hm">
         {title()};
         <h1>hello react comp</h1>
     </div>
     </>
     );
 };
 
 
 //React.createElement ==>( React element)object ==> HTML Element(render)
 //react element
 const heading = React.createElement("h1",{id:"heading"},"This is a heading");
 const root= ReactDOM.createRoot(document.getElementById("root"));
 root.render(<Learn/>);
 

