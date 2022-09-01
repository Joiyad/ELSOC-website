import React from 'react'
import About from '../components/AboutUs'
import Background from '../components/Background'
import Faq from '../components/Faq'
import Footer from '../components/Footer'
import Front from '../components/Front'
import Gallary from '../components/Gallary'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Background/>
        <Front/>
        <About/>
        <Gallary/>
        <Faq />
        <Footer/>
    </div>
  )
}

export default Home