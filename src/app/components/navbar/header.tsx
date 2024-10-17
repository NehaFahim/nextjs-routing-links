import React from 'react'

const Navbar = () => {
  return (
    <div className='text-yellow-200 h-16 bg-black'> 
    <div className='flex justify-between items-center'>
        <h1 className='text-2xl m-2'>WEB👩‍💻🚀</h1>
        <ul  className=' hover:text-yellow-200 flex gap-9 mr-20 font-bold'>
            <a className=' hover:text-lime-400' href="/home">Home</a>
            <a className=' hover:text-lime-400' href="/about">About</a>
            <a className=' hover:text-lime-400' href="/contact">Contact</a>
            <a className=' hover:text-lime-400' href="/login">Log in</a>
        </ul>
        </div>
         </div>
  )
}


export default Navbar
