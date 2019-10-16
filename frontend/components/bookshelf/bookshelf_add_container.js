import {connect} from 'react-redux';
import {addBook, deleteBook, fetchBookshelves} from '../../actions/bookshelf_actions';
import BookshelfAdd from './bookshelf_add';
import {fetchBookBookshelves} from '../../actions/book_actions';

const mapStateToProps = (state, OwnProps) => {
  
  let bookshelves = Object.values(state.entities.bookshelves);
  return ({
    book: OwnProps.book,
    bookshelves: bookshelves
  })
}

const mapDispatchToProps = dispatch => {
  return ({
    addBook: shelfInfo => dispatch(addBook(shelfInfo)),
    deleteBook: shelfInfo => dispatch(deleteBook(shelfInfo)),
    fetchBookBookshelves: (bookId) => dispatch(fetchBookBookshelves(bookId)),
    fetchBookshelves: () => dispatch(fetchBookshelves())
  })
};


export default connect(mapStateToProps, mapDispatchToProps)(BookshelfAdd);