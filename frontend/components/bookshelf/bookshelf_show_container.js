import {connect} from 'react-redux';
import BookshelfShow from './bookshelf_show';
import {fetchBookshelf, fetchBookshelves} from '../../actions/bookshelf_actions';

const mapStateToProps = (state, OwnProps) => {
  
  let bookshelfId = OwnProps.match.params.bookshelfId;
  let bookshelf = state.entities.bookshelves[bookshelfId];  
  let books = [];
  if (bookshelf && bookshelf.bookIds){
    books = bookshelf.bookIds.map(bookId => state.entities.books[bookId])
  }
  return ({
    bookshelf: bookshelf,
    books: books
  })
};

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchBookshelf: id => dispatch(fetchBookshelf(id)),
    fetchBookshelves: () => dispatch(fetchBookshelves())
  })
};

export default connect(mapStateToProps, mapDispatchToProps)(BookshelfShow);