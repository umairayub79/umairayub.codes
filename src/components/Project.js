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
                <div class="card">
                  <div class="card-text">
                    <span class="date">{this.props.date}</span>
                    <h4>{this.props.name}</h4>
                    <p>{this.props.description} </p>
                    <p class="type">{this.props.type}</p>
                  </div>
                <div class="card-link">
                      <div class="link">
                      <a href={this.props.link} target="_blank" rel="noopener noreferrer">{this.props.linkText}</a>
                    </div>
                  </div>
                  </div>
              </a>
            </React.Fragment>
        )
    }
}

export default Project;