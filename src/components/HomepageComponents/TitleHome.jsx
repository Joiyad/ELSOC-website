import React from 'react'

const Front = () => {
  return (
    <div className='bg-black bg-opacity-40 w-full h-screen z-20'>
       <div className='pt-40 px-4 md:px-16'>
         <h2 className='text-center drop-shadow-15xl shadow-white font-exo tracking-wide font-semibold md:text-left text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-teal-600 text-5xl md:text-8xl'>ELECTRICAL <br /> SOCIETY</h2>
         <h2 className='text-center font-semibold md:text-left text-white text-2xl md:text-2xl my-16 md:my-8'>Society for the Promotion of diverse technical and social <br/> culture of the Department of Electrical Engineering</h2>
         <div className='flex justify-center md:block'><button className='px-4 py-2 text-white font-semibold text-2xl border-4 border-teal-700 hover:bg-teal-700 rounded-[24px]'>Explore More</button></div>
       </div>
    </div>
  )
}

export default Front;