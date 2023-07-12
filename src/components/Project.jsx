import React from 'react';
import { Link } from 'react-router-dom';

const Project = ({ project }) => {
    const { name, description, type, date, link,} = project;

    return (
            <Link to={link} target='_blank' className='bg-white rounded-lg shadow-md p-6'>
                    <h2 className="text-xl font-semibold mb-4">{name}</h2>
                    <p className="text-gray-600 mb-4">{description}</p>
                    <div className="mb-4">
                        <span className="inline-block bg-gray-200 text-gray-800 py-1 px-2 rounded-full text-sm mr-2">
                            {type}
                        </span>
                        <span className="inline-block bg-gray-200 text-gray-800 py-1 px-2 rounded-full text-sm">
                            {date}
                        </span>
                    </div>
            </Link>
    );
};

export default Project;