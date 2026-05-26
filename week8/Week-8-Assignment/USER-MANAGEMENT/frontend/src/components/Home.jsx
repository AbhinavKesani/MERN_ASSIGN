import React from 'react'

function Home() {
  return (
    <div className='flex flex-col items-center justify-center min-h-[85vh] text-center px-6'>
      
      <h1 className='text-7xl font-black mb-6'>
        Modern User Management
      </h1>

      <p className='text-xl text-gray-300 max-w-2xl leading-8'>
        Create, organize and manage users with a modern,
        beautiful and interactive dashboard powered by React,
        Tailwind and Express.
      </p>

      <button className='gradient-btn mt-10 px-10 py-4 rounded-2xl text-xl font-bold'>
        Explore Now
      </button>
    </div>
  )
}

export default Home