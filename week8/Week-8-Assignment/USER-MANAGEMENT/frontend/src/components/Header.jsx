import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (

    <header className='backdrop-blur-lg bg-black/30 border-b border-white/10 sticky top-0 z-50 shadow-lg'>

      <div className='max-w-6xl mx-auto flex items-center justify-between px-6 py-4'>

        <h1 className='text-4xl font-black bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent drop-shadow-lg'>
          UserHub
        </h1>

        <nav className='flex gap-8 text-lg font-bold'>

          <Link
            className='text-white hover:text-pink-400 hover:scale-110 transition-all duration-300'
            to='/'
          >
            Home
          </Link>

          <Link
            className='text-white hover:text-cyan-400 hover:scale-110 transition-all duration-300'
            to='/add-user'
          >
            Add User
          </Link>

          <Link
            className='text-white hover:text-purple-400 hover:scale-110 transition-all duration-300'
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