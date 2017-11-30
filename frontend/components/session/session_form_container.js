import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { signup, clearErrors } from '../../actions/session_actions';

import SessionForm from './session_form';

const mapStateToProps = state => ({
	loggedIn: Boolean(state.session.user),
	errors: state.errors.errors
});

const mapDispatchToProps = (dispatch, ownProps) => ({
	signup: user => dispatch(signup(user)),
	clearErrors: () => dispatch(clearErrors())
});

export default withRouter(connect(
	mapStateToProps,
	mapDispatchToProps
)(SessionForm));