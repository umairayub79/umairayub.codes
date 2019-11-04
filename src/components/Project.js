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
                <div className="project_item">
                <a href={this.props.link} target="_blank">
                    <h4 className="project_title">{this.props.name}</h4>
                    <p className="project_description">{this.props.description}</p>
                    <p>{this.props.type}</p>
                    <p className="project_date">{this.props.date}</p>
                    <div class="projectLink">
                        <a href={this.props.link} target="_blank">{this.props.linkText}</a>
                    </div>
                </a>
                </div>
            </React.Fragment>
        )
    }
}

export default Project;