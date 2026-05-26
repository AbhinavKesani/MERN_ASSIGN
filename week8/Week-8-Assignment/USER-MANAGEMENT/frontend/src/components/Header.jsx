import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className='glass sticky top-0 z-50'>
      
      <div className='max-w-6xl mx-auto flex items-center justify-between px-6 py-4'>
        
        <h1 className='text-3xl font-black'>
          User<span className='text-purple-400'>Hub</span>
        </h1>

        <nav className='flex gap-6 text-lg font-semibold'>
          
          <Link
            className='hover:text-purple-300 transition-all'
            to='/'
          >
            Home
          </Link>

          <Link
            className='hover:text-purple-300 transition-all'
            to='/add-user'
          >
            Add User
          </Link>

          <Link
            className='hover:text-purple-300 transition-all'
            to='/users-list'
          >
            Users
          </Link>

        </nav>
      </div>
    </header>
  )
}

export default Header