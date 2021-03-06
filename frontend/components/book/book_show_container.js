import {connect} from 'react-redux';
import {fetchBook, fetchBookBookshelves} from '../../actions/book_actions';
// import {fetchBookshelves} from'../../actions/bookshelf_actions';
import BookShow from './book_show';


const mapStateToProps = (state, OwnProps) => {
    
    let bookId = OwnProps.match.params.bookId;
    let book = state.entities.books[bookId];
    return ({
        book: book,
    })
};
const mapDispatchToProps = (dispatch) => {
    
    return ({
        fetchBook: id => dispatch(fetchBook(id)),     
        fetchBookBookshelves: (bookId) => dispatch(fetchBookBookshelves(bookId)),
    })
};

export default connect(mapStateToProps, mapDispatchToProps)(BookShow);



