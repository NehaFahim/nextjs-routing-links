import React from 'react'
import Navbar from '../components/navbar/header'
import Image from 'next/image'

const learn = () => {
  return (
    <div>
      <Navbar/>
     <div>
<div className='w-max'>
  <Image src={"/abstract.avif"} alt={"backpic"} width={1400} height={800}></Image>
</div>
      <main className=" w-max border-solid border-2 border-sky-700 bg-emerald-200 shadow-green-400/80 ring ring-green-400 ring-offset-3 rounded-lg shadow-lg p-8 max-w-4xl mx-auto mt-10 absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/3 ">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">About Next.js</h1>
        <p className="text-lg text-gray-700 mb-4">
          Next.js is a popular React framework for building fast and optimized web applications.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          It provides several built-in features such as:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-lg text-gray-700">
          <li>Server-side rendering (SSR)</li>
          <li>Static site generation (SSG)</li>
          <li>API routes</li>
          <li>File-based routing</li>
          <li>Fast performance with automatic code splitting</li>
        </ul>
        <p className="text-lg text-gray-700 mt-4">
          You can create full-stack applications with Next.js by integrating API routes and connecting to databases. 
          It also supports dynamic routing, image optimization, and internationalization.
        </p>
      </main>
      </div>
      </div>
  )
}

export default learn