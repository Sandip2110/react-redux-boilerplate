import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import dispatch from "../middleware";
import {IReduxState} from "../reducers";

function App(props: any) {
    const getDispatch = useDispatch();
    const counter = useSelector((state: IReduxState) => state.demoReducer.result);
    console.log(counter, "counter");
    function change() {
        dispatch(getDispatch, "SIMPLE_ACTION", "changed");
    }
    return (
        <div className="App text-center">
            This is the current percentage {counter}
            <span onClick={change}>Total percentage: {counter}</span>
        </div>
    );
}
export default App;
