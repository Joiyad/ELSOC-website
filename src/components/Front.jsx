import React from 'react'

const Front = () => {
  return (
    <div className='bg-front w-full h-screen z-20'>
       <div className='pt-40 px-4 md:px-16'>
         <h2 className='text-center drop-shadow-5xl shadow-black font-exo tracking-wide font-semibold md:text-left text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-teal-600 text-5xl md:text-8xl'>ELECTRICAL <br /> SOCIETY</h2>
         <h2 className='text-center font-semibold md:text-left text-white text-2xl md:text-2xl my-16 md:my-8'>An Electrical Society for Research and Innovation in <br /> the domain of electrical technologies in NIT, Hamirpur </h2>
         <div className='flex justify-center md:block'><button className='px-4 py-2 text-white font-semibold text-2xl border-4 border-teal-300 hover:bg-teal-700 rounded-[24px]'>Explore More</button></div>
       </div>
    </div>
  )
}

export default Front;