import { all, call } from 'redux-saga/effects';

import {articlesSagas} from "./list.saga"

export default function* rootSaga() {
	yield all([
		call(articlesSagas),
	]);
}
