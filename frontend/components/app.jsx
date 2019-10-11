import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import {Route, Link, Switch} from 'react-router-dom';
import {AuthRoute, ProtectedRoute} from '../util/route_util';
import BookIndexContainer from './book/book_index_container';
import BookShowContainer from './book/book_show_container';
// import logo from '../../app/assets/images/logo.jpg';

const App = () => (
    <div>
        <header className='app-header'>
            <div id="logo">
                <Link to='/' style={{ textDecoration: 'none' }}>
                    <h1 key="bookpileindex" >BookPile</h1>
                    {/* <img src={logo} alt="bookpile logo"/> */}
                </Link>
            </div>
            <div className='nav-header'>
            <GreetingContainer />
            </div>
        </header>

        <div className="main-content">
            <Switch>
            <AuthRoute exact path="/login" component={LoginFormContainer} /> 
             <AuthRoute  exact path="/signup" component={SignupFormContainer} />
             <ProtectedRoute exact path='/' component={BookIndexContainer}/>
             <Route path='/books/:bookId' component={BookShowContainer} />
             
            </Switch>
        </div>
    </div>

);
export default App;