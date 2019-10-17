import {connect} from 'react-redux';
import {updateBookshelf, fetchBookshelf} from '../../actions/bookshelf_actions';
import BookshelfEdit from './bookshelf_edit';

const mapStateToProps = (state, OwnProps) => {
  
  // let bookshelfId = OwnProps.match.params.bookshelfId;
  let bookshelf = state.entities.bookshelves[OwnProps.match.params.bookshelfId];
  return({
    bookshelf: bookshelf
  })
};

const mapDispatchToProps = (dispatch) => {
  return({
    updateBookshelf: bookshelf => dispatch(updateBookshelf(bookshelf)),
    fetchBookshelf: id => dispatch(fetchBookshelf(id))
  })
};

export default connect(mapStateToProps,mapDispatchToProps)(BookshelfEdit);



