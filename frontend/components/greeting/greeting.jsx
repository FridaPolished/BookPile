import {Link} from 'react-router-dom';
import React from "react";
import LoginFormContainer from '../session_form/login_form_container';
import SignupFormContainer from '../session_form/signup_form_container';
const Greeting =({ currentUser, logout}) => {
    const sessionForms = () => (
        <React.Fragment> 
            <div>
            <LoginFormContainer />
            <SignupFormContainer /> 
            </div>
        </React.Fragment>
    )

    const greetUser = () => (
        <nav className="navbar">
            <div id="greeting">Hello, {currentUser.name}!</div>
            <br></br>
            <button className="logout-button" onClick={logout}>Log Out</button>
        </nav>
        
    )
    return currentUser ? greetUser() : sessionForms();

};

export default Greeting;
