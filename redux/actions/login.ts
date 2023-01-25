import { constantActions } from "../config/constants";
const {ACTION_START, ACTION_FAIL, ACTION_SUCCESS} = constantActions

export const actionStart = (query?:string) => {
    return {
        type: ACTION_START,
        query
    };
};

export const actionSuccess = (data:any) => {
    return {
        type: ACTION_SUCCESS,
        payload: data,
    };
};

export const actionFail = (data:any) => {
    return {
        type: ACTION_FAIL,
        payload: data,
    };
};
