import { constantActions } from "../config/constants";
const {LOGIN_START, LOGIN_FAIL, LOGIN_SUCCESS} = constantActions

export const postLogin = (data:any) => {
    return {
        type: LOGIN_START,
        payload: data,
    };
};

export const postLoginSuccess = (data:any) => {
    return {
        type: LOGIN_SUCCESS,
        payload: data,
    };
};

export const postLoginFail = (data:any) => {
    return {
        type: LOGIN_FAIL,
        payload: data,
    };
};