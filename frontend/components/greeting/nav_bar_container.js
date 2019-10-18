import { connect } from 'react-redux';
import NavBar from './nav_bar';
import {logout} from '../../actions/session_actions';

const mapStateToProps = (state) => {
    let userId = state.session.id;
    let user = state.entities.users[userId];
    return ({
        currentUser: user,
    })
};

const mapDispatchToProps = (dispatch) => {
    return ({
        logout: () => dispatch(logout())
    })
};


export default connect(mapStateToProps, mapDispatchToProps)(NavBar);

