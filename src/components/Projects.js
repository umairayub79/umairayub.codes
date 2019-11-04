import React, { Component } from 'react'
import Project from './Project'
import '../css/Projects.css'
class Projects extends Component {
    render() {
        return (
            <React.Fragment>
                <h1>Projects</h1>
                <div className="projects">  
                    <div className="projects_list">
                        <Project name="AppManager" description="Manage all your apps" type="Android App" date="December 2018" link="https://ply.gl/umairayub.appmanager" linkText="Google Play"/>
                        <Project name="BitLauncher" description="Minimalist Launcher" type="Android App" date="July 2019" link="https://ply.gl/umairayub.bitlauncher" linkText="Google Play"/> 
                        <Project name="HTML Generator" description="Generate Html in a Click" type="Android App" date="April 2019" link="https://ply.gl/umairayub.htmlgenerator" linkText="Google Play"/>
                        <Project name="ProjectLog" description="Project Progress Logger" type="Android App" date="May 2019" link="https://ply.gl/umairayub.projectlog" linkText="Google Play"/>
                    </div>
                    <div className="projects_list">
                        <Project name="MaDialog" description="Material Alert Dialog Library" type="Android Library" date="July 2019" link="https://ply.gl/umairayub.madialogdemoapp" linkText="Google Play"/>
                        <Project name="Rock.it Launcher" description="Simple Launcher and Minimal" type="Android App" date="March 2019" link="https://ply.gl/umairayub.rockitlauncher" linkText="Google Play"/> 
                        <Project name="Github Stars" description="Open Source Stars" type="Web App" date="Nov 2019" link="https://githubstars.netlify.com" linkText="Vist"/> 

                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default Projects;