import React, { Component } from 'react'
import Project from './Project'
import '../css/Projects.css'
class Projects extends Component {
    render() {
        return (
            <div className="projects">
                <Project name="AppManager" description="Manage all your apps" date="2018-12-10"/>
                 <Project name="BitLauncher" description="Minimalist Launcher" date="2019-07-31"/> 
                 <Project name="HTML Generator" description="Generate Html in a Click" date="2019-04-16"/>
                 <Project name="ProjectLog" description="Project Progress Logger" date="2019-5-5"/>
            </div>
        )
    }
}
export default Projects;