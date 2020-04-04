import {Action} from "../actions/demoActions";

export interface IState {
    loading: boolean;
    list: string[];
}

const defaultState: IState = {
    loading: false,
    list: [],
}

export default (state = defaultState, action: any) => {
    switch (action.type) {
        case Action.TEST_ACTION_NAME:
            return {
                ...state,
            };
        case Action.REQUEST_GET_LIST:
            return {
                ...state,
                loading: true,
            };
        case `${Action.REQUEST_GET_LIST}_SUCCESS`:
            console.log(action.payload.list)
            return {
                ...state,
                loading: false,
                list: action.payload.list
            };
        case `${Action.REQUEST_GET_LIST}_FAILURE`:
            return {
                ...state,
                loading: false,
            };
        default:
            return state
    }
}