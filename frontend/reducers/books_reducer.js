import {RECEIVE_BOOK, RECEIVE_ALL_BOOKS} from '../actions/book_actions';
import {RECEIVE_ALL_BOOKSHELVES, RECEIVE_BOOKSHELF} from '../actions/bookshelf_actions';
import {merge} from 'lodash';

const booksReducer = (state ={}, action) => {
    Object.freeze(state);
    
    switch(action.type){
        case RECEIVE_ALL_BOOKS:
            return action.books;
        case RECEIVE_BOOK:
            return merge({}, state, {[action.book.id]: action.book})
        case RECEIVE_ALL_BOOKSHELVES:
        case RECEIVE_BOOKSHELF:
            return Object.assign({}, state, action.books);
        default:
            return state;
    }
};

export default booksReducer;