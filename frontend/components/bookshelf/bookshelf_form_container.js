import {connect} from 'react-redux';
import {createBookshelf} from '../../actions/bookshelf_actions';
import BookshelfForm from './bookshelf_form';

const mapStateToProps = (state) => {
  
  return({
    errors: state.errors,
    currentUserId: state.session.id,
  })
};

const mapDispatchToProps = (dispatch) => {
  
  return({
    createBookshelf: bookshelf => dispatch(createBookshelf(bookshelf))
  })
};

export default connect(mapStateToProps,mapDispatchToProps)(BookshelfForm);



