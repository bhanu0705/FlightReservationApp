import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import About from "./About";
const Title=()=>( 
    <h1>
      Hello
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
          <li> <Link to="/about">About</Link></li> 
             <li><Link to="/contact">contact us</Link></li>
             <li>cart</li>
          </ul>
          </div>
          {
           isLoggedIn? <button onClick={()=>setIsLoggedIn(false)}>Logout</button>: <button onClick={()=>setIsLoggedIn(true)}>Login</button>
            }
        
     </div>
    );
 };

 export default Header;