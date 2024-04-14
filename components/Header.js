import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import About from "./About";
const Title=()=>( 
    <h1>
      Flight Reservation System
  </h1>
);

const Header=()=>{
    useEffect(()=>{
        console.log(2);
    })
    const[isLoggedIn,setIsLoggedIn]=useState(false);
    return (
     <div className="header">
         <Title />
         <div className="nav-bar">
          <ul>
            <li><Link to="/">Home</Link></li>
          <li> <Link to="/about">About us</Link></li> 
             <li><Link to="/contact">Contact us</Link></li>
             
          </ul>
          </div>
          
         
     </div>
    );
 };

 export default Header;