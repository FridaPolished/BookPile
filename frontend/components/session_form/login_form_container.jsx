
import {connect} from 'react-redux';
import SessionForm from './session_form';
import {login} from '../../actions/session_actions';

const mapStateToProps = ({errors}) => {
    return ({
        errors: errors.session,
        formType: 'login',
    })
};
const mapDispatchToProps = (dispatch) => {
    return ({
        processForm: (user) => dispatch(login(user)),
    });
};

export default connect(mapStateToProps,mapDispatchToProps)(SessionForm);


