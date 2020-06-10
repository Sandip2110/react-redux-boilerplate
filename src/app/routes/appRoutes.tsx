import React from "react";
import {HashRouter as Router, Route, Switch} from "react-router-dom";
import Dashboard from "../../containers/dashboard";

export default function AppRoutes() {
    return (
        <Router>
            <Switch>
                <Route path={"/"} component={Dashboard}/>
            </Switch>
        </Router>
    )
}