import {connect} from 'react-redux';
import BookshelfShow from './bookshelf_show';
import {fetchBookshelf} from '../../actions/bookshelf_actions';

const mapStateToProps = (state, OwnProps) => {
  
  let bookshelfId = OwnProps.match.params.bookshelfId;
  let bookshelf = state.entities.bookshelves[bookshelfId];  
  let bookIds = bookshelf.bookIds;
  let books = bookIds.map(bookId => state.entities.books[bookId])
  return ({
    bookshelf: bookshelf,
    books: books
  })
};

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchBookshelf: id => dispatch(fetchBookshelf(id))
  })
};

export default connect(mapStateToProps, mapDispatchToProps)(BookshelfShow);