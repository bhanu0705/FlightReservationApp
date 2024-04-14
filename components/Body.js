import React, { useEffect, useState } from "react";
import RegInputs from "./RegInputs";
import LoginInputs from "./LoginInputs";

const Body = () => {
    const [showRegInputs, setShowRegInputs] = useState(false);
    const[showLoginInputs, setShowLoginInputs]=useState(false);
    const handleRegisterClick = () => {
        setShowRegInputs(true);
        setShowLoginInputs(false);
    };
    const handleLoginClick = () =>{
        setShowLoginInputs(true);
        setShowRegInputs(false);
    };
    return (
        <>
            <div className="menubar">
                <button className="register-btn" onClick={handleRegisterClick}>
                    Register
                </button>
                <button className="login-btn" onClick={handleLoginClick}>Login</button>
            </div>
           <div className="regform" style={{ display: showRegInputs || showLoginInputs ? "block" : "none" }}>
            
            {showRegInputs && <RegInputs />}
            {showLoginInputs && <LoginInputs />}
            </div>
        </>
    );
};

export default Body;
