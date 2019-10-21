import React, { Component } from 'react'
import Home from "./Home"
import Projects from './Projects'
import { Router, Route,Switch} from "react-router-dom";
import { createBrowserHistory } from "history";

import "../css/App.css"
import Navbar from './Navbar';
import NotFound from './NotFound';

const history = createBrowserHistory();


class App extends Component {
    render() {
        return (
            <Router history={history}>
              <Navbar/>
              <div className="App">
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/projects/" component={Projects} />
                  <Route component = {NotFound}/>
                </Switch>
              </div>
          </Router>
        );
    }
}
export default App;