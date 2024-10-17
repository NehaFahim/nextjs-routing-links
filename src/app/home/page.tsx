import React from 'react'
import Navbar from '../components/navbar/header'
import Footer from '../components/navbar/footer'
import Image from 'next/image'

const home = () => {
    return (
        <div>
          <Navbar/>
    <div className='w-max'>
        <Image src={"/homepic.jpg"} alt={"back pic"} width={1600} height={1200}></Image>
    </div>
        <div className='p-12'>
        <h1 className='bg-black h-14 flex justify-center text-3xl items-center underline decoration font-serif font-extrabold bg-clip-text text-transparent absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 '>Home Page</h1>
        <br />
        <p className='text-center text-white text-balance p-7 font-sans bg-clip-text text-transparent absolute top-1/4 left-1/5 '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit accusamus, sunt non itaque debitis  quaerat ut dicta impedit est voluptas tempora necessitatibus, excepturi obcaecati ea? Architecto unde recusandae debitis. 
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas voluptas magnam modi ipsa, dolores est labore facilis ut autem quae sit veritatis cumque esse sed veniam, nam reiciendis quos neque. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, necessitatibus aliquid provident mollitia minus voluptates commodi excepturi neque distinctio dolorum dolorem alias nulla! Fugiat iure corrupti est cum, perspiciatis provident. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, quaerat. Nisi explicabo cumque cum consequatur illum dolores, provident laboriosam totam exercitationem quidem aut! Libero quas non, quidem provident rem totam?
        </p>
        <button className="bg-yellow-500 hover:bg-yellow-600  shadow-lg shadow-orange-500/55 text-white font-bold py-2 px-4 rounded items-center justify-center absolute top-96 left-1/3 w-48">See More</button>
        <button className="bg-emerald-500 hover:bg-teal-300  shadow-lg shadow-cyan-500/55 text-white font-bold py-2 px-4 rounded items-center justify-center absolute top-96 left-1/2 w-48">Click Here!</button>
    </div>
    <Footer/>
    </div>
  )
}

export default home

