import React from "react";
import { motion } from "framer-motion"
import Heading from "../BasicComponents/Heading";

const Gallary = () => {
  return (
    <div className=" bg-gray-900 bg-opacity-80 py-40">
        <Heading title="Gallery"/>
        <div
        className="py-8 md:py-16 px-20 mt-20">
        <motion.div 
        initial={{ opacity: 0, y:100 }}
        transition={{ ease: "easeOut", duration: 2 }}
        whileInView={{opacity:1, y:0}}
        className="flex flex-wrap justify-center -mx-4">
          <div className="hidden md:block md:w-3/4 px-4">
            <div className="h-full w-full bg-cover rounded shadow-md" style={{backgroundImage: "url('https://source.unsplash.com/random/1280x720')"}}></div>
          </div>
          <div className="md:w-1/4 h-auto px-4">
            <div><img className="rounded shadow-md" src="https://source.unsplash.com/random/1280x720" alt=""/></div>
            <div className="my-8"><img className="rounded shadow-md" src="https://source.unsplash.com/random/1280x720" alt=""/></div>
            <div><img className="rounded shadow-md" src="https://source.unsplash.com/random/1280x720" alt=""/></div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Gallary;
