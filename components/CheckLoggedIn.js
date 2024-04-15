import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const CheckLoggedIn = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  useEffect(() => {
    console.log(1111);
    
    if (token) {
      const role = localStorage.getItem('role');
      if (role === 'user') {
        navigate('/userpage'); 
      } 
      else if (role === 'admin') {
        navigate('/contact'); 
      }
      else{
        navigate('/');
      }
    }
  }, [token]);

  return null;
};

export default CheckLoggedIn;
