import {connect} from 'react-redux';
import {fetchBookshelves, createBookshelf} from '../../actions/bookshelf_actions';
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
  })
};


export default connect(mapStateToProps, mapDispatchToProps)(BookshelfIndex);