import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='bg-cyan-800 text-white font-serif font-light items-center absolute inset-x-0 bottom-0 h-14 flex justify-center text-2xl'>
      Contect with us in our social media platform
      <div className='ml-56'>
        <Image src={"/icons.jpg"} alt={"icons"} width={150} height={90}></Image>
      </div>
    </div>
  )
}

export default Footer 