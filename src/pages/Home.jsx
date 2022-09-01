import React from 'react'
import About from '../components/AboutUs'
import Background from '../components/Background'
import Faq from '../components/Faq'
import Front from '../components/Front'
import Gallary from '../components/Gallary'

const Home = () => {
  return (
    <div>
        <Background/>
        <Front/>
        <About/>
        <Gallary/>
        <Faq />
    </div>
  )
}

export default Home