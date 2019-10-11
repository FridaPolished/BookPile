import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import {Route, Switch} from 'react-router-dom';
import {AuthRoute, ProtectedRoute} from '../util/route_util';
import BookIndexContainer from './book/book_index_container';
import BookShowContainer from './book/book_show_container';

const App = () => (
    <div>
        <header className='app-header'>
            <h1>Welcome to BookPile</h1>
            <div>
            </div>
            <div className='nav-header'>
            <GreetingContainer />
            </div>
        </header>

        <div>
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