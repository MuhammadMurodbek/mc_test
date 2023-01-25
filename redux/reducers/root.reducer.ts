import { combineReducers } from 'redux';
import loginPostReducer from './login';

export const rootReducer = combineReducers({
	loginPostReducer,
});
