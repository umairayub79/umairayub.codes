import React from 'react'
import Socials from '../Socials'
const Footer = () => {
    const date = new Date()
    return (
        <div className='justify-center items-center text-center'>
            <Socials />
            <p className='mt-6 mb-2 '>Umair Ayub &copy; {date.getFullYear()}</p>
        </div>
    )
}

export default Footer