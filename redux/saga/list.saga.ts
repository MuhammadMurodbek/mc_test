import { takeLatest, put, call, all } from "redux-saga/effects";
import api from "../config/request.params";
import {actionFail, actionSuccess} from "../actions/login";
import {constantActions} from "../config/constants";

export interface ResponseGenerator{
    config?:any,
    data?:any,
    headers?:any,
    request?:any,
    status?:number,
    statusText?:string
}
const {ACTION_START} = constantActions
export function* getArticles({ payload, query }:any) {
    try {
        const url = query?.length ? `http://localhost:3000/usersall/?${query}`:'http://localhost:3000/usersall/'

        const response:ResponseGenerator = yield api.request.get(url, {
            headers: {
                "Content-Type": "application/json"
            },
            params: payload,
        });
        yield put(actionSuccess(response.data));
    } catch (e:any) {
        yield put(actionFail(e.response));
    }
}
export function* getArticlesStart() {
    yield takeLatest(ACTION_START, getArticles);
}

export function* articlesSagas() {
    yield all([call(getArticlesStart)]);
}
