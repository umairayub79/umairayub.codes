import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";

export default class Navbar extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="navigation">
          <div className="navigation-sub">
            <Link to="/" className="item">
              Home
            </Link>
          </div>
          <div className="navigation-sub">
            <Link to="/Projects" className="item">
              Projects
            </Link>
          </div>
          <div className="navigation-sub">
            <Link to="/Blog" className="item">
              Blog
            </Link>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
