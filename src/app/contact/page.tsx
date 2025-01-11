import React from 'react'
import Navbar from '../components/navbar/header'

const contact = () => {
  return (
    <div>
      <Navbar/>
    <div className='p-6'>
    <h1 className='bg-emerald-200  h-14 flex justify-center text-2xl items-center underline decoration-2 font-serif font-semibold'>Contact Us</h1>
    {/* <br />
    <p className='text-center text-orange-900  text-balance p-7'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit accusamus, sunt non itaque debitis  quaerat ut dicta impedit est voluptas tempora necessitatibus, excepturi obcaecati ea? Architecto unde recusandae debitis. 
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas voluptas magnam modi ipsa, dolores est labore facilis ut autem quae sit veritatis cumque esse sed veniam, nam reiciendis quos neque. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, necessitatibus aliquid provident mollitia minus voluptates commodi excepturi neque distinctio dolorum dolorem alias nulla! Fugiat iure corrupti est cum. <br /></p> */}

<div className='bg-slate-800 shadow-md rounded p-5 m-9 w-2/4  ml-80'>
          <h2 className='font-bold mb-4 text-amber-400 text-2xl flex items-center justify-center'>Get in Touch</h2>
          <form>
            <label className='block mb-2'>
              <span className='text-sky-500 font-bold text-2xl'>Name:</span>
              <input type='text' className='w-full p-2 pl-8 text-sm text-gray-700' />
            </label>
            <label className='block mb-2'>
              <span className='text-sky-500 font-bold text-2xl'>Email:</span>
              <input type='email' className='w-full p-2 pl-8 text-sm text-gray-700' />
            </label>
            <label className='block mb-2'>
              <span className='text-sky-500 font-bold text-2xl'>Message:</span>
              <textarea className='w-full p-2 pl-8 text-sm text-gray-700' rows={5} />
            </label>
            <button className='bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded'>Send Message</button>
          </form>
        </div>

    
</div>
</div>
  )
}

export default contact