import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../css/Project.css'

class Project extends Component {
    static propTypes = {
        name: PropTypes.string,
        type: PropTypes.string,
        date: PropTypes.string,
        description: PropTypes.string,
        link: PropTypes.string,
        linkText : PropTypes.string
        
        
    }
    
    render() {
        return (
            <React.Fragment>
              <a href={this.props.link} target="_blank" rel="noopener noreferrer">
                <div className="card">
                  <div className="card-text">
                    <span className="date">{this.props.date}</span>
                    <h4 className="ProjectName">{this.props.name}</h4>
                    <p className="ProjectDescription">{this.props.description} </p>
                    <p className="type">{this.props.type}</p>
                  </div>
                <div className="card-link">
                      <div className="link">
                      <p className="linkText">{this.props.linkText}</p>
                    </div>
                  </div>
                  </div>
              </a>
            </React.Fragment>
        )
    }
}

export default Project;