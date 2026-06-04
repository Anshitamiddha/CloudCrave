import React from "react";
class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state={};
        console.log(this.props.name + "Child Constructor");
    }
    async conponentDidMount(){
        const data= await  fetch("https://api.github.com/users/anshitamiddha");
        const json= await data.json();
        console.log(json);
       // console.log(this.props.name + "Child ComponentDidMount");
    }
   render(){

        const {name, location} = this.props;
       

    return(

        <div className="user-card">            
        <h2>Name:{name}</h2>
        <h3> Location: {location} </h3>

    </div>
    );
}
};

export default UserClass;
                                                                        
/*
-Parent Constructor
-Parent Render
  
  - FirstChild Constructor
  -FirstChild Render

  -SecondChild COnstructor
  -SecondChild Render
  
  <DOM-UPDATED-in single batch>(child1+child2)
  -First ComponentDidMount
  -Second ComponentDidMount

-Parent ComponentDidMount

*/