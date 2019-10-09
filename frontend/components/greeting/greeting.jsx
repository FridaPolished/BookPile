import {Link} from 'react-router-dom';
import React from "react";
import LoginFormContainer from '../session_form/login_form_container';
import SignupFormContainer from '../session_form/signup_form_container';
const Greeting =({ currentUser, logout}) => {
    const sessionForms = () => (
        <div>
            {/* <Link to="/signup">Sign Up</Link>
             &nbsp;or&nbsp; 
            <Link to="/login">Log In</Link> */}
            <LoginFormContainer />
            <div id="top">
            <SignupFormContainer />
            </div>
        </div>
    )

    const greetUser = () => (
        <nav className="navbar">
            <h2>Hello, {currentUser.name}!</h2>
            <br></br>
            <button className="logout-button" onClick={logout}>Log Out</button>
        </nav>
    )
    return currentUser ? greetUser() : sessionForms();

};

export default Greeting;
