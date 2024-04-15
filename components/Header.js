import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Title = () => ( 
  <h1 className="logo">
    FMS
  </h1>
);

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleSignout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
    navigate('/');
  };
  const token = localStorage.getItem('token');
  useEffect(() => {
    
    console.log(123);
    console.log('Token:', token);
    if (token) {
      setIsLoggedIn(true);

    }else{
      setIsLoggedIn(false);
    }
  }, [token]);

  return (
    <div className="header">
      <Title />
      <div className="nav-bar">
        <ul>
          <li><Link to="/about">About us</Link></li> 
          <li><Link to="/contact">Contact us</Link></li>
          {isLoggedIn && <button onClick={handleSignout}>Sign out</button>}
        </ul>
      </div>
    </div>
  );
};

export default Header;
