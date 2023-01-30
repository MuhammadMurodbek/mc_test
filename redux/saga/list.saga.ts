import { takeLatest, put, call, all } from 'redux-saga/effects';
import api from '../config/request.params';
import { actionFail, actionSuccess } from '../actions/login';
import { constantActions } from '../config/constants';
import { toast } from 'react-hot-toast';

export interface ResponseGenerator {
  config?: any;
  data?: any;
  headers?: any;
  request?: any;
  status?: number;
  statusText?: string;
}
const { ACTION_START } = constantActions;
export function* getArticles({ payload, query }: any) {
  try {
    const baseUrl = `http://localhost:3000/usersall`;
    const url = query?.length
      ? `${baseUrl}/?${query}`
      : `http://localhost:3000/usersall`;

    const response: ResponseGenerator = yield api.request.get(url, {
      headers: {
        'Content-Type': 'application/json',
      },
      params: payload,
    });
    yield put(actionSuccess(response.data));
  } catch (e: any) {
    yield put(actionFail(e.message));
    toast.error(e?.message + '\nrun: -yarn dev:server-');
  }
}
export function* getArticlesStart() {
  yield takeLatest(ACTION_START, getArticles);
}

export function* articlesSagas() {
  yield all([call(getArticlesStart)]);
}
