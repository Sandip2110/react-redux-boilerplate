import React from "react";
import "./styles.scss";
import {useDispatch, useSelector} from "react-redux";
import dispatch from "../../middleware";
import {getStudentList} from "../../actions/demoActions";
import {IReduxState} from "../../reducers";

export default function Dashboard() {
    const storeDispatch = useDispatch();
    const listOfStudents: string[] = useSelector((state: IReduxState) => state.demoReducer.list);
    function handleClick() {
        dispatch(storeDispatch, getStudentList());
    }
    return (
        <div className={"middle"}>
            <h1>Boilerplate - React 16 + Typescript + Redux</h1>
            <p>
                Click on the button to make an api call and get the list of students
            </p>
            <button className={"btn"} onClick={handleClick}>GET LIST</button>

            {listOfStudents.map((name, index) => {
                return <div key={index}>{name}</div>
            })}
        </div>
    )
}