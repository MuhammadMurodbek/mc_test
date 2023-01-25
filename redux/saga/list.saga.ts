import { takeLatest, put, call, all } from "redux-saga/effects";
import api from "../config/request.params";
import {postLoginFail, postLoginSuccess} from "../actions/login";
import {constantActions} from "../config/constants";

export interface ResponseGenerator{
    config?:any,
    data?:any,
    headers?:any,
    request?:any,
    status?:number,
    statusText?:string
}
const {LOGIN_START} = constantActions
export function* getArticles({ payload, query }:any) {
    try {
        const url = query?.length ? `http://localhost:3000/usersall/?${query}`:'http://localhost:3000/usersall/'

        const response:ResponseGenerator = yield api.request.get(url, {
            headers: {
                "Content-Type": "application/json"
            },
            params: payload,
        });
        yield put(postLoginSuccess(response.data));
    } catch (e:any) {
        yield put(postLoginFail(e.response));
    }
}
export function* getArticlesStart() {
    yield takeLatest(LOGIN_START, getArticles);
}

export function* articlesSagas() {
    yield all([call(getArticlesStart)]);
}
