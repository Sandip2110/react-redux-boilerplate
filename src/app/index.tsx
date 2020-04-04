import React from 'react';
import {Switch, Route, HashRouter as Router} from "react-router-dom";
import Dashboard from "../components/dashboard";

function App() {
    return (
        <div className="App text-center">
            <Router>
               <Switch>
                   <Route path={"/"} component={Dashboard}/>
               </Switch>
            </Router>
        </div>
    );
}
export default App;
