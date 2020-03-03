export interface IState {
    result: string;
}

const defaultState: IState = {
    result: "95%"
}

export default (state = defaultState, action: any) => {
    switch (action.type) {
        case 'SIMPLE_ACTION':
            return {
                result: action.payload
            }
        default:
            return state
    }
}