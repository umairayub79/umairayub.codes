import React from 'react'
import {FaTwitter, FaProductHunt, FaGithub, FaEnvelope, FaLinkedin, FaFacebook} from 'react-icons/fa6'
import { Link } from 'react-router-dom'
const Socials = () => {
  return (
    <div className='mt-8 grid grid-cols-2 md:flex gap-8 text-4xl'>
      <Link to={'https://facebook.com/umairayub28'} target='_blank' className='hover:text-blue-500'>
        <FaFacebook/>
      </Link>
      <Link to={'https://twitter.com/umairayub79'} target='_blank' className='hover:text-blue-500'>
        <FaTwitter/>
      </Link>
      <Link to={'https://linkedin.com/in/umairayub79'} target='_blank' className='hover:text-blue-500'>
        <FaLinkedin/>
      </Link>
      <Link to={'https://github.com/umairayub79'} target='_blank' className='hover:text-blue-500'>
        <FaGithub/>
      </Link>
      <Link to={'https://producthunt.com/@umairayub18'} target='_blank' className='hover:text-blue-500'>
        <FaProductHunt/>
      </Link>
      <Link to={'mailto:umairayub79@gmail.com'} target='_blank' className='hover:text-blue-500'>
        <FaEnvelope/>
      </Link>
    </div>
  )
}

export default Socials