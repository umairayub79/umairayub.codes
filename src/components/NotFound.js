import React, { Component } from 'react'
import Helmet from 'react-helmet'
import {NavLink} from 'react-router-dom'
import '../css/NotFound.css'
class NotFound extends Component {
    render() {
        return (
            <React.Fragment>
            <Helmet>
              <title>404</title>
            </Helmet>
            <h5>The page you are looking for was moved, removed, renamed or might never
            existed. <br /></h5>
            <NavLink to="/">Back to the website</NavLink>
          </React.Fragment>
    
        )
    }
}
export default NotFound;