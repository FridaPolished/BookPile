import {connect} from 'react-redux';
import {updateBookshelf} from '../../actions/bookshelf_actions';
import BookshelfEdit from './bookshelf_edit';

const mapStateToProps = (state) => {
  let bookshelves = Object.values(state.entities.bookshelves)
  return({
    bookshelves: bookshelves
  })
};

const mapDispatchToProps = (dispatch) => {
  return({
    updateBookshelf: bookshelf => dispatch(updateBookshelf(bookshelf)),
  })
};

export default connect(mapStateToProps,mapDispatchToProps)(BookshelfEdit);



