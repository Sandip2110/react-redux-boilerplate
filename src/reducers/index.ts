import { combineReducers } from 'redux';
import demoReducer from "./demoReducer";
import {IState as IDemoState} from "./demoReducer"

export interface IReduxState {
    demoReducer: IDemoState,
}

export default combineReducers<IReduxState>({
    demoReducer: demoReducer
});