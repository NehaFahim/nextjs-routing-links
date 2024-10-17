import React from 'react'
import Navbar from '../components/navbar/header'
import Footer from '../components/navbar/footer'
import Image from 'next/image'

const about = () => {
  return (
    <div>
      <Navbar/>
      <div>
      <Image src={"/aboutpic.png"} alt="background image" width={1500} height={1400}></Image>
    </div>

    <div className='p-12'>
    <h1 className='bg-amber-200 h-14 w-96 flex justify-center text-2xl items-center underline decoration font-serif font-semibold  absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>About Page</h1>
    <br />
    <p className='text-center text-slate-900 text-balance p-7  absolute top-1/4 left-1/5'>
     <br />Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit accusamus, sunt non itaque debitis  quaerat ut dicta impedit est voluptas tempora necessitatibus, excepturi obcaecati ea? Architecto unde recusandae debitis. 
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas voluptas magnam modi ipsa, dolores est labore facilis ut autem quae sit veritatis cumque esse sed veniam, nam reiciendis quos neque. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, necessitatibus aliquid provident mollitia minus voluptates commodi excepturi neque distinctio dolorum dolorem alias nulla! Fugiat iure corrupti est cum, perspiciatis provident. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, quaerat. Nisi explicabo cumque cum consequatur illum dolores, provident laboriosam totam exercitationem quidem aut! Libero quas non, quidem provident rem totam?
    <br /> <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas laborum assumenda hic saepe provident optio, quibusdam, cum suscipit consectetur esse modi dolore minima numquam tempora aliquid earum! Laborum, quaerat magni. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa beatae in corporis repellendus autem maiores ea soluta tenetur expedita magnam doloremque laborum laudantium velit, consectetur fugit sapiente maxime laboriosam totam.
    <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla nihil beatae cupiditate, sint exercitationem tempora, harum culpa natus hic eius eos repudiandae odio nostrum officiis provident est mollitia minus tempore.</p>
</div>
<Footer/>
</div>
  )
}

export default about