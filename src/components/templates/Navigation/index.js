import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <nav className='py-4'>
      <Link to="/">
        <h1 className='text-lg lg:text-xl font-semibold'>Al-Quran Indonesia</h1>
      </Link>
    </nav>
  )
}

export default Navigation