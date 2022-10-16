import React from 'react'

const Heading = ({title}) => {
  return (
    <h2 className='text-5xl text-center  font-semibold text-teal-200 hover:transition-all hover:delay-150 hover:ease-in-out'>{title}</h2>
  )
}

export default Heading