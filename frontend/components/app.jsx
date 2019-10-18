import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import {Route, Link, Switch} from 'react-router-dom';
import {AuthRoute, ProtectedRoute} from '../util/route_util';
import BookIndexContainer from './book/book_index_container';
import BookShowContainer from './book/book_show_container';
import BookshelfIndex from './bookshelf/bookshelf_index_container';
import BookshelfShowContainer from './bookshelf/bookshelf_show_container';
import BookshelfFormContainer from './bookshelf/bookshelf_form_container';
import NavBarContainer from './greeting/nav_bar_container';


const App = () => (
    <div>
        <header className='app-header'>
            <div id="logo">
                <Link to='/' style={{ textDecoration: 'none' }}>
                    <div key="bookpileindex" >bookpile</div>
                </Link>
            </div>
            <div className='nav-header'>
            <GreetingContainer />
            </div>
        </header>
        <NavBarContainer />    
        <div className="main-content">
            <Switch>
                <AuthRoute exact path="/login" component={LoginFormContainer} /> 
                <AuthRoute  exact path="/signup" component={SignupFormContainer} />
                <ProtectedRoute exact path='/' component={BookIndexContainer}/>
                <ProtectedRoute exact path='/books/:bookId' component={BookShowContainer}/>
                <ProtectedRoute path='/shelves' component={BookshelfIndex} />
                <ProtectedRoute exact path='/shelves/new' component={BookshelfFormContainer} />
                <ProtectedRoute path='/shelves/:bookshelfId' component={BookshelfShowContainer} />
            </Switch>
        </div>
    </div>


);
export default App;