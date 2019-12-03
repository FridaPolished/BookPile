
import React from "react";
import ReactDOM from "react-dom";
//  import * as ApiUtil from './util/session_api_util';
import configureStore from "./store/store";
import Root from './components/root';
// import * as BooksAPIUtil from './util/book_api_util';
// import {fetchBookshelves} from './actions/bookshelf_actions';

document.addEventListener("DOMContentLoaded", () => {
    let store;
    if(window.currentUser){
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    const root = document.getElementById('root');
    
    ReactDOM.render(<Root store={store} />, root);
});

// window.fetchBooks = BooksAPIUtil.fetchBooks;
// window.fetchBookshelves = fetchBookshelves;
// window.dispatch = store.dispatch;
    // window.fetchBook = BooksAPIUtil.fetchBook;
    // window.getState = store.getState;
    // window.login = ApiUtil.login;
    // window.logout = ApiUtil.logout;
    // // window.signup = ApiUtil.signup;