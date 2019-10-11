import React from 'react'; 
import { connect } from 'react-redux';
import { fetchBooks } from '../../actions/book_actions';
import BookIndex from './book_index';


const mapStateToProps = (state) => {
    debugger
    return ({
        books: Object.values(state.entities.books)
    })
};
const mapDispatchToProps = (dispatch) => {
    debugger
    return ({
        fetchBooks: () => dispatch(fetchBooks())
    })
};

export default connect(mapStateToProps, mapDispatchToProps)(BookIndex);



