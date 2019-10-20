import React, { Component } from 'react'
import Home from "./Home"
import Projects from './Projects'
import { BrowserRouter, Route, Link } from 'react-router-dom';
import "../css/App.css"

class App extends Component {
    render() {
        return (
            <BrowserRouter>
            <div className="App">
              <div className="navigation">
                <div className="navigation-sub">

                  <Link to="/" className="item">Home</Link>
                  <Link to="/Projects" className="item">Projects</Link>
        
                </div>
              </div>
               <Route exact path="/" component={Home} />
              <Route path="/projects" component={Projects} />
            </div>
          </BrowserRouter>
        );
    }
}
export default App;