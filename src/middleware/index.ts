import axios from "axios";
import {IActions} from "../models";
import {baseUrl} from "../config";

export const idTokenName = "refyneToken";
export let token: string = "";

export function saveToken(idToken: string) {
    token = idToken;
    window.localStorage.setItem(idTokenName, idToken);
}
export function getToken() {
    return window.localStorage.getItem(idTokenName);
}

function getHeader(base64Str: string, authType?: string) {
    return {
        'Content-Type': "application/json",
        "Authorization": `${authType ? authType : "Bearer"} ${base64Str}`,
    }
}

export default async function dispatch(dispatch: any,  actionDetails: IActions) {
    let splitActionName = actionDetails.actionName.split("_");
    dispatch({type: actionDetails.actionName, payload: actionDetails.body});
    if (splitActionName[0] === "REQUEST") {
        try {
            let response: any = undefined;
            if (actionDetails.type === "GET") {
                response = await axios.get(`${baseUrl}${actionDetails.url}`,
                    {headers: getHeader(actionDetails.token ? actionDetails.token : token, actionDetails.authType), timeout: 30000});

            } else if (actionDetails.type === "POST") {
                response = await axios.post(`${baseUrl}${actionDetails.url}`, actionDetails.body,
                    {headers: getHeader(actionDetails.token ? actionDetails.token : token, actionDetails.authType), timeout: 30000});
            }
            if (response && (response.status === 200 || response.status === 204)) {
                dispatch({type: `${actionDetails.actionName}_SUCCESS`, payload: response.data});
                return Promise.resolve(response.data);
            } else {
                return Promise.reject(response);
            }
        } catch (error) {
            dispatch({type: `${actionDetails.actionName}_FAILURE`, payload: error.data});
            return Promise.reject(error);
        }
    }
}
