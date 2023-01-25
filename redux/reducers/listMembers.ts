import { constantActions } from '../config/constants';
const { ACTION_FAIL, ACTION_START, ACTION_SUCCESS, ACTION_SEARCH } = constantActions;

const initialState = {
	actionStart: false,
	paramsData: {
		name: '',
		email: '',
		phone: '',
	},
	articlesFail: false,
};

const actionGetReducer = (state = initialState, action: any) => {
	switch (action.type) {
		case ACTION_START:
			return {
				...state,
				actionStart: true,
			};
		case ACTION_SEARCH:
			return {
				...state,
				actionStart: true,
				query:action?.query,
			};
		case ACTION_SUCCESS:
			return {
				...state,
				actionStart: false,
				actionSuccess: true,
				actionSuccessData: action.payload,
				actionFail: false,
			};
		case ACTION_FAIL:
			return {
				...state,
				actionStart: false,
				actionSuccess: false,
				actionFailData: action.payload,
				actionFail: true,
			};
		default:
			return state;
	}
};

export default actionGetReducer;
