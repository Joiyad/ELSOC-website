import React from 'react'
import { motion } from "framer-motion"
import Heading from './Heading'

const AboutUs = () => {
  return (
    <div className='px-4 md:px-52 py-48 bg-gray-900 bg-opacity-70'>
      <div>
        <Heading title="Who we are" />
        <motion.div
        initial={{ opacity: 0, y:100 }}
        transition={{ ease: "easeOut", duration: 2 }}
        whileInView={{opacity:1, y:0}}
        className='p-8 mt-20 text-xl text-white rounded-[20px]'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat minima laudantium tempora nobis impedit commodi, et repellat cupiditate deleniti magnam alias harum quaerat eum itaque neque, a, iusto quae ratione!
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat minima laudantium tempora nobis impedit commodi, et repellat cupiditate deleniti magnam alias harum quaerat eum itaque neque, a, iusto quae ratione!
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat minima laudantium tempora nobis impedit commodi, et repellat cupiditate deleniti magnam alias harum quaerat eum itaque neque, a, iusto quae ratione!
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat minima laudantium tempora nobis impedit commodi, et repellat cupiditate deleniti magnam alias harum quaerat eum itaque neque, a, iusto quae ratione!
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat minima laudantium tempora nobis impedit commodi, et repellat cupiditate deleniti magnam alias harum quaerat eum itaque neque, a, iusto quae ratione!
          </motion.div>
      </div> 
    </div>
  )
}

export default AboutUs