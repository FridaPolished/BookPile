<<<<<<< HEAD
import React from 'react'; 
=======
>>>>>>> 342fd451ef16267b507a998f32e6d2b734be83c3
import { connect } from 'react-redux';
import { fetchBooks } from '../../actions/book_actions';
import BookIndex from './book_index';


const mapStateToProps = (state) => {
<<<<<<< HEAD
    
    return ({
        books: Object.values(state.entities.books)
    })
};
const mapDispatchToProps = (dispatch) => {
    
=======
    return ({
        books: Object.values(state.books)
    })
};
const mapDispatchToProps = (dispatch) => {
>>>>>>> 342fd451ef16267b507a998f32e6d2b734be83c3
    return ({
        fetchBooks: () => dispatch(fetchBooks())
    })
};

export default connect(mapStateToProps, mapDispatchToProps)(BookIndex);



