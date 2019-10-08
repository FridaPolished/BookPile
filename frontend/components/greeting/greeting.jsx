import {Link} from 'react-router-dom';
import React from "react";

const Greeting =({ currentUser, logout}) => {
    const sessionLinks = () => (
        <div>
            {/* <Link to="/signup">Sign Up</Link>
             &nbsp;or&nbsp; 
            <Link to="/login">Log In</Link> */}
        </div>
    )

    const greetUser = () => (
        <div>
            <h2>Hello, {currentUser.username}!</h2>
            <button onClick={logout}>Log Out</button>
        </div>
    )
    return currentUser ? greetUser() : sessionLinks();

};

export default Greeting;
