import { RECEIVE_USERS } from '../actions/reviews_actions';


export default (state = {}, action) => {
	Object.freeze(state);

	switch(action.type) {
		case RECEIVE_USERS:
			return action.users;

		default:
			return state;
	}
}