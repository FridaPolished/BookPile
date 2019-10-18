# BookPile

----

#About

Bookpile is a web application inspired in [Goodreads](https://www.goodreads.com/) where users can create virtual bookshelves.

#Live demo
[Bookpile](https://bookpile.herokuapp.com/#/)


#Technologies used

  Backend:
  * PostgresSQL database
  * Ruby on Rails
  
  Frontend:
  * React-Redux
  * HTML /CSS
  * AWS

#Features

  * User-Auth
    * Users can login or sign up.
    * Users can logout.
    * Restrictions: Users can't use the books or bookshelves feature if they are logged out.
    
  * Books
    * Books have an index where users can directly add or remove books to bookshelves.
    * Books have a show page with a cover image and information about the book.
  
  * Bookshelves
    * Bookshelves hold all the books.
    * Users can create, update and delete bookshelves.
    * Bookshelves have a show page with all the books contained in it.


#Code Snippet
To keep a normalize State the Bookshelves controller retrieves all bookshelves
that include that book through a custom query and renders a json a response the Reducer can interpret as bookshelves that include the book. This is stored inside of the book id and is later used as part of the checkboxes functionality.


```import {RECEIVE_BOOK, RECEIVE_ALL_BOOKS} from '../actions/book_actions';
```import {RECEIVE_ALL_BOOKSHELVES, RECEIVE_BOOKSHELF} from '../actions/bookshelf_actions';
```import {merge} from 'lodash';
```
```const booksReducer = (state ={}, action) => {
```    Object.freeze(state);
```    
```    switch(action.type){
```        case RECEIVE_ALL_BOOKS:
```            return action.books;
```        case RECEIVE_BOOK:
```            return merge({}, state, {[action.book.id]: action.book})
```        case RECEIVE_ALL_BOOKSHELVES:
```        case RECEIVE_BOOKSHELF:
```            return merge({}, state, action.books);
```        default:
```            return state;
```    }
```};
```
```export default booksReducer;
