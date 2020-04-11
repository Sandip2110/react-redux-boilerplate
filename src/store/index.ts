import {createStore, compose} from 'redux';
import { createHashHistory } from "history";
import rootReducer from "../reducers";

export const history = createHashHistory({
    basename: "/",
});
function configureStore(initialState: any) {
    return createStore(
        rootReducer,
        initialState,
        compose((window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__())
    );
}
const store = configureStore({});
export default  store;