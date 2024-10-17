import Navbar from "./components/navbar/header"
import Footer from "./components/navbar/footer"
import Link from "next/link"
import Image from 'next/image';

function page () {
  return(
    <div>

      <Navbar/>
      <div className="max-w-screen-2xl">
      <Image src={"/twolight.avif"} alt="background image" width={1400} height={700}></Image>
      
      <h1 className="text-5xl font-bold flex items-center justify-center bg-clip-text text-transparent absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2  bg-gradient-to-r from-amber-300 to-violet-500">Welcome to my NextJs page!</h1>
      <br />
      <p className="font-normal flex items-center justify-center absolute top-1/3 left-1/3 text-white ">This page have four routes and link components in navbar</p>
      <br />
      <br />
      <br />
      {/* <div className="flex justify-center">
      <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded items-center justify-center absolute top-72">Learn More</button>
      </div> */}
      {/* <h1 className="flex justify-center text-5xl text-justify text-yellow-700 ">HELLO WORLD</h1> */}
      {/* <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-5xl font-extrabold bg-clip-text text-transparent bg-lime-300">HELLO WORLD</h1> */}

      </div>
  
      <br />
      <Link href={"/about"}></Link>
      <Link href={"/contact"}></Link>
      <Link href={"/home"}></Link>
      <Link href={"/login"}></Link>
      
      <Link href={"/learnmore"}> <div className="flex justify-center">
      <button className="bg-orange-500 hover:bg-orange-700 shadow-lg shadow-orange-500/50 w-52 text-white font-bold py-2 px-4 rounded items-center justify-center absolute top-72">Learn More</button>
      </div></Link>
      <Footer/>
      
      </div>

  )
}
export default page
