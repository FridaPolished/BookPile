import {connect} from 'react-redux';
import {fetchBook} from '../../actions/book_actions';
import BookShow from './book_show';


<<<<<<< HEAD
const mapStateToProps = (state, OwnProps) => {
    
    let bookId = OwnProps.match.params.bookId;
    let book = state.entities.books[bookId];
    return ({
        book: book
    })
};
const mapDispatchToProps = (dispatch) => {
    
    return ({
        fetchBook: id => dispatch(fetchBook(id))
=======
const mapStateToProps = (state) => {
    return ({

    })
};
const mapDispatchToProps = (dispatch) => {
    return ({
        
>>>>>>> 342fd451ef16267b507a998f32e6d2b734be83c3
    })
};

export default connect(mapStateToProps, mapDispatchToProps)(BookShow);



