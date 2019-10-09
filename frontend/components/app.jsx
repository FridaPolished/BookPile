import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import {Route} from 'react-router-dom';
import {AuthRoute} from '../util/route_util';
// import logo from '../../app/assets/images/bookpilelogo.png';

const App = () => (
    <div>
        <header className='app-header'>
            <h1>Welcome to BookPile</h1>
            <div>
            {/* <img src={logo} alt="Books and stuff" /> */}
            </div>
            <div className='nav-header'>
            <GreetingContainer />
        {/* <LoginFormContainer /> */}
            </div>
        </header>
        {/* <div>
        <SignupFormContainer /> 
        </div> */}
         
         <AuthRoute exact path="/login" component={LoginFormContainer} />
         <AuthRoute  exact path="/signup" component={SignupFormContainer} />
    </div>

);
export default App;