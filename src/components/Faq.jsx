import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { motion } from "framer-motion"
import Heading from "./Heading";
 
const Faq = () => {
  const [open, setOpen] = useState(0);
 
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
 
  return (
    <div className=" bg-gray-900 bg-opacity-80 py-20">
    <Heading title="Frequently Answered Questions"/>
    <motion.div
    initial={{ opacity: 0, y:100 }}
    transition={{ ease: "easeOut", duration: 2 }}
    whileInView={{opacity:1, y:0}}
    className="m-auto px-12 pt-28 pb-40 md:px-36">
    <Fragment>
      <Accordion className="bg-white px-4 py-3 cursor-pointer rounded-lg" open={open === 1} onClick={() => handleOpen(1)}>
        <AccordionHeader>This is the first question</AccordionHeader>
        <AccordionBody className="md:py-1 text-xm">
          We're not always in the position that we want to be at. We're
          constantly growing. We're constantly making mistakes. We're constantly
          trying to express ourselves and actualize our dreams.
        </AccordionBody>
      </Accordion>
      <Accordion className="bg-white px-4 py-3 my-8 cursor-pointer rounded-lg" open={open === 2} onClick={() => handleOpen(2)}>
        <AccordionHeader>This is the second question</AccordionHeader>
        <AccordionBody>
          We're not always in the position that we want to be at. We're
          constantly growing. We're constantly making mistakes. We're constantly
          trying to express ourselves and actualize our dreams.
        </AccordionBody>
      </Accordion>
      <Accordion className="bg-white px-4 py-3 cursor-pointer rounded-lg" open={open === 3} onClick={() => handleOpen(3)}>
        <AccordionHeader>This is the third question</AccordionHeader>
        <AccordionBody>
          We're not always in the position that we want to be at. We're
          constantly growing. We're constantly making mistakes. We're constantly
          trying to express ourselves and actualize our dreams.
        </AccordionBody>
      </Accordion>
    </Fragment>
    </motion.div>
    </div>
  );
}
export default Faq;
