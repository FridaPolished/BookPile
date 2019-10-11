import {RECEIVE_BOOK, RECEIVE_ALL_BOOKS} from '../actions/book_actions';

const booksReducer = (state ={}, action) => {
    Object.freeze(state);
<<<<<<< HEAD
    
=======
>>>>>>> 342fd451ef16267b507a998f32e6d2b734be83c3
    switch(action.type){
        case RECEIVE_ALL_BOOKS:
            return action.books;
        case RECEIVE_BOOK:
            return Object.assign({}, state, {[action.book.id]: action.book})
        default:
            return state;
    }
};

export default booksReducer;