import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'react-router-dom'

export default function NotFound() {
    return (
        <React.Fragment>
            <Helmet>
                <title>404</title>
            </Helmet>
            <div className='max-w-xl h-full flex flex-col gap-5 justify-center items-center text-center'>
            <p>The page you are looking for was moved, removed, renamed or might never
                existed.</p>
            <Link to="/" className='underline text-blue-700'>Back to the website</Link>
            </div>
        </React.Fragment>
    )
}