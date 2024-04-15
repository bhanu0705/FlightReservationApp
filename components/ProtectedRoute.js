import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ProtectedRoute = ({ component: Component }) => {
    const [isLogged, setIsLogged] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {

        const isLoggedIn = !!localStorage.getItem('token');
        setIsLogged(isLoggedIn);
        if (!isLoggedIn) {
            navigate('/');
        }
    }, []);

    return isLogged ? <Component /> : null;
}

export default ProtectedRoute;
