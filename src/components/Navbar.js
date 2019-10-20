import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class Navbar extends Component {
    render() {
        return (
            <React.Fragment>
            <div className="navigation">
            <div className="navigation-sub">

              <Link to="/" className="item">Home</Link>
              <Link to="/Projects" className="item">Projects</Link>
    
            </div>
          </div>
          </React.Fragment>
        )
    }
}
