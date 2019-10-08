import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import {Route} from 'react-router-dom';
import {AuthRoute} from '../util/route_util';
// import logo from '../../app/assets/images/bookpilelogo';

const App = () => (
    <div>
        <header className='app-header'>
            <h1>Welcome to BookPile</h1>
            {/* <img src={logo} alt="Books and stuff" /> */}
            <GreetingContainer />
        <LoginFormContainer />
        </header>
        <SignupFormContainer />
         {/* <AuthRoute exact path="/login" component={LoginFormContainer} />
         <AuthRoute  exact path="/signup" component={SignupFormContainer} /> */}
    </div>

);
export default App;