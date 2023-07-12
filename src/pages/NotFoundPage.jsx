import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'react-router-dom'

export default function NotFound() {
    return (
        <React.Fragment>
            <Helmet>
                <title>404 - Page Not Found</title>
            </Helmet>
            <div className='max-w-xl h-full flex flex-col gap-5 justify-center items-center text-center'>
                <h2 className='font-bold'>Page Not Found</h2>
                <p>The page you are looking for could not be found. It may have been moved, removed, renamed, or it might never have existed.</p>
                <Link to="/" className="underline text-blue-700">Go back to the website's homepage</Link>
            </div>
        </React.Fragment>
    )
}