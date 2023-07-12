import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div className='flex flex-col h-full max-w-xl gap-5 justify-center items-center text-center p-3'>
      <Helmet>
        <title>Umair Ayub | Web Developer</title>
        <meta name="description" content="I'm a self-taught Web Developer Specialized in Front-end Development." />
      </Helmet>
      <h1 className='font-bold uppercase text-[2.5rem]'>Hi, I'm Umair</h1>
      <p className="description">Student | Maker</p>
      <h2 className='text-2xl font-bold'>I'm a self-taught Web Developer Specialized in Front-end Development.</h2>
      <Link to={'/about'} className='text-blue-700 underline underline-offset-4'>more about me</Link>
    </div>
  )
}

export default HomePage