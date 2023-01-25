import { combineReducers } from 'redux';
import actionListReducer from './listMembers';

export const rootReducer = combineReducers({
	actionListReducer,
});
