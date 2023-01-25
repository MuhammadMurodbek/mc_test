import { constantActions } from "../config/constants";
const {LOGIN_START, LOGIN_FAIL, LOGIN_SUCCESS, LOGIN_SEARCH} = constantActions

export const postLogin = (query?:string) => {
    return {
        type: LOGIN_START,
        query
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

// export const searchMembers = (query:string) => {
//     return {
//         type: LOGIN_SEARCH,
//         query:query
//     };
// };