const Title=()=>( 
    <h1>
      Hello
  </h1>
);

const Header=()=>{
    return (
     <div className="header">
         <Title />
         <div className="nav-bar">
          <ul>
             <li>About</li>
             <li>contact us</li>
             <li>cart</li>
          </ul>
         </div>
     </div>
    );
 };

 export default Header;