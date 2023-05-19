import React from 'react'
import Background from '../assets/images/book_library.jpg'

function Home() {
  return (
    <div 
      style={{ backgroundImage: `url(${ Background })`}} 
      className='flex flex-row justify-center mx-auto bg-cover bg-fixed'
      >
        <div className='flex place-items-center h-screen'>
          <h3 className='p-5 bg-white bg-opacity-80 text-black rounded'>Welcome to the Book Library</h3>
        </div>
    </div>
  )
}

export default Home