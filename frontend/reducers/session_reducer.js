import { 
	RECEIVE_CURRENT_USER,
	RECEIVE_ERRORS } from '../actions/session_actions';
import merge from 'lodash/merge';

const _nullUser = Object.freeze({
	user: null,
	errors: []
});

export default (state = _nullUser, action) => {

  switch(action.type) {
    case RECEIVE_CURRENT_USER:
    	const user = action.user
      return merge({}, state, { user });

    case RECEIVE_ERRORS:
    	return { user: null, errors: action.erros };

    default:
      return state;
  }
};
