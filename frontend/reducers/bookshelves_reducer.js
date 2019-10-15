import {RECEIVE_ALL_BOOKSHELVES, RECEIVE_BOOKSHELF} from '../actions/bookshelf_actions';

const bookshelvesReducer = (state = {}, action)=> {
  
  Object.freeze(state);
  switch (action.type){
    case RECEIVE_ALL_BOOKSHELVES:
      return action.bookshelves;
    case RECEIVE_BOOKSHELF:
      return Object.assign({}, state, action.bookshelf);
    default:
      return state;
  }
};

export default bookshelvesReducer;