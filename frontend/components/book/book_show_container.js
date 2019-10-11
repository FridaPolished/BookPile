import {connect} from 'react-redux';
import {fetchBook} from '../../actions/book_actions';
import BookShow from './book_show';


const mapStateToProps = (state, OwnProps) => {
    debugger
    let bookId = OwnProps.match.params.bookId;
    let book = state.entities.books[bookId];
    return ({
        book: book
    })
};
const mapDispatchToProps = (dispatch) => {
    debugger
    return ({
        fetchBook: id => dispatch(fetchBook(id))
    })
};

export default connect(mapStateToProps, mapDispatchToProps)(BookShow);



