import {RECEIVE_BOOK, RECEIVE_ALL_BOOKS} from '../actions/book_actions';
import {RECEIVE_ALL_BOOKSHELVES} from '../actions/bookshelf_actions';

const booksReducer = (state ={}, action) => {
    Object.freeze(state);
    
    switch(action.type){
        case RECEIVE_ALL_BOOKS:
            return action.books;
        case RECEIVE_BOOK:
            return Object.assign({}, state, {[action.book.id]: action.book})
        case RECEIVE_ALL_BOOKSHELVES:
            return Object.assign({}, state, action.books);
            default:
            return state;
    }
};

export default booksReducer;