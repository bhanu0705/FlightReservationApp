import React, { useEffect, useState } from "react";
import RegInputs from "./RegInputs";
import LoginInputs from "./LoginInputs";

const Body = () => {
    const [showRegInputs, setShowRegInputs] = useState(true);
    const[showLoginInputs, setShowLoginInputs]=useState(false);
    const [isRegClicked, setIsRegClicked] = useState(true);
    const [isLoginClicked, setIsLoginClicked] = useState(false);

    const handleRegisterClick = () => {
        setShowRegInputs(true);
        setShowLoginInputs(false);
        setIsRegClicked(true);
        setIsLoginClicked(false);
    };
    const handleLoginClick = () =>{
        setShowLoginInputs(true);
        setShowRegInputs(false);
        setIsLoginClicked(true);
        setIsRegClicked(false);
    };
    return (
        <>
            <div className="menubar">
            <button
                    className={`register-btn ${isRegClicked ? 'clicked' : ''}`}
                    onClick={handleRegisterClick}
>
                    Register
                </button>
                <button className={`login-btn ${isLoginClicked ? 'clicked' : ''}`} 
                onClick={handleLoginClick}>
                    Login
                </button>
                
            </div>
            <div className="outerregform">
           <div className="regform" style={{ display: showRegInputs || showLoginInputs ? "block" : "none" }}>
            
            {showRegInputs && <RegInputs />}
            {showLoginInputs && <LoginInputs />}
            </div>
            </div>
        </>
    );
};

export default Body;
