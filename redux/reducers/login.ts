import { constantActions } from '../config/constants';
const { LOGIN_FAIL, LOGIN_START, LOGIN_SUCCESS, LOGIN_SEARCH } = constantActions;

const initialState = {
	loginStart: false,
	paramsData: {
		name: '',
		email: '',
		phone: '',
	},
	articlesFail: false,
};

const loginPostReducer = (state = initialState, action: any) => {
	switch (action.type) {
		case LOGIN_START:
			return {
				...state,
				loginStart: true,
			};
		case LOGIN_SEARCH:
			return {
				...state,
				loginStart: true,
				query:action?.query,
			};
		case LOGIN_SUCCESS:
			return {
				...state,
				loginStart: false,
				loginSuccess: true,
				loginSuccessData: action.payload,
				loginFail: false,
			};
		case LOGIN_FAIL:
			return {
				...state,
				loginStart: false,
				loginSuccess: false,
				loginFailData: action.payload,
				loginFail: true,
			};
		default:
			return state;
	}
};

export default loginPostReducer;
