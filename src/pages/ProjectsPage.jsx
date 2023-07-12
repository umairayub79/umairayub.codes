import React from 'react';
import projectsData from '../data/Projects.json';
import Project from '../components/Project';
import { Helmet } from 'react-helmet';

const ProjectsPage = () => {
    return (
        <div className='p-5'>
            <Helmet>
                <title>Projects - Umair Ayub</title>
            </Helmet>
            <h1 className='text-4xl py-3 text-center'>Projects</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
                {projectsData.projects.map((project) => (
                    <Project key={project.name} project={project} />
                ))}
            </div>
        </div>
    );
};

export default ProjectsPage;