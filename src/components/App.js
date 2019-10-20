import React, { Component } from 'react'
import Home from "./Home"
import Projects from './Projects'
import { BrowserRouter, Route } from 'react-router-dom';
import "../css/App.css"
import Navbar from './Navbar';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
            <div className="App">
              <Navbar/>
               <Route exact path="/" component={Home} />
              <Route path="/projects" component={Projects} />
            </div>
          </BrowserRouter>
        );
    }
}
export default App;