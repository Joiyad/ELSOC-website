import React from 'react'
import { motion } from "framer-motion"

const data = [
  {id:1, title:"Semester 1", imageLink:"https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60", link:"/notes/semester"},
  {id:2, title:"Semester 2", imageLink:"https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60", link:"/notes/semester"},
  {id:3, title:"Semester 3", imageLink:"https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60", link:"/notes/semester"},
  {id:4, title:"Semester 4", imageLink:"https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60", link:"/notes/semester"},
  {id:5, title:"Semester 5", imageLink:"https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60", link:"/notes/semester"},
  {id:6, title:"Semester 6", imageLink:"https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60", link:"/notes/semester"},
  {id:7, title:"Semester 7", imageLink:"https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60", link:"/notes/semester"},
  {id:8, title:"Semester 8", imageLink:"https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60", link:"/notes/semester"},
]

const Notes = () => {
  return (
    <div>
      <h2 className='text-4xl md:text-7xl text-center mt-32 mb-16 text-white'>Study Material</h2>
      <h2 className='text-xl md:text-2xl text-center mt-32 mb-16 text-gray-400 px-4 md:px-20'>It's always hectic to find proper notes and recent year papers. ELSOC presents properly documented study material prepared by final and pre-final year students.</h2>
      <motion.div 
      initial={{ opacity: 0, y:100 }}
      transition={{ ease: "easeOut", duration: 2 }}
      whileInView={{opacity:1, y:0}}
      className='flex flex-wrap justify-center gap-x-8 gap-y-16 my-12'>
        {data.map(({id, title, imageLink, link}) => (
        <a key={id} href={link} className="w-1/4 rounded-md overflow-hidden border-2 border-opacity-20 hover:scale-110 hover:transition-all hover:delay-150 hover:ease-in-out">
          <img src={imageLink} alt='notes' />
          <div className='text-xl text-teal-600 text-center py-2'>{title}</div>
        </a>
        ))}
      </motion.div>
    </div>
  )
}

export default Notes