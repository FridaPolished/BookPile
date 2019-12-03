import {connect} from 'react-redux';
import {fetchBookshelves, createBookshelf, updateBookshelf, deleteBookshelf} from '../../actions/bookshelf_actions';
import BookshelfIndex from './bookshelf_index'

const mapStateToProps = (state) => {
  return ({
    bookshelves: Object.values(state.entities.bookshelves)
  })
};
const mapDispatchToProps = (dispatch) => {
  return ({
    fetchBookshelves: () => dispatch(fetchBookshelves()),
    createBookshelf: bookshelf => dispatch(createBookshelf(bookshelf)),
    deleteBookshelf: bookshelf => dispatch(deleteBookshelf(bookshelf)),
    updateBookshelf: bookshelf => dispatch(updateBookshelf(bookshelf))
  })
};


export default connect(mapStateToProps, mapDispatchToProps)(BookshelfIndex);