import {Actions} from "../models";

export enum Action {
    TEST_ACTION_NAME = "TEST_ACTION_NAME",
    REQUEST_GET_LIST = "REQUEST_GET_LIST",
    REQUEST_SAVE_NAME = "REQUEST_SAVE_NAME",
}
export function getStudentList(): Actions {
    return {
        actionName: Action.REQUEST_GET_LIST,
        type: "GET",
        url: "/5e88a56d310000aada3f4a65",
    }
}

export function saveStudentName(name: string) {
    return {
        actionName: Action.REQUEST_SAVE_NAME,
        type: "POST",
        body: {name},
        url: "/saveName",
    }
}
