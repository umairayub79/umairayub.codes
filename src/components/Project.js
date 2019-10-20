import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../css/Project.css'

class Project extends Component {
    static propTypes = {
        name: PropTypes.string,
        date: PropTypes.string,
        description: PropTypes.string
    }
    
    render() {
        return (
            <React.Fragment>
                <div className="project_item">
                    <h4 className="project_title">{this.props.name}</h4>
                    <p className="project_description">{this.props.description}</p>
                    <p className="project_date">{this.props.date}</p>
                </div>
            </React.Fragment>
        )
    }
}
export default Project;