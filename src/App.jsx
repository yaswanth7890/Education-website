import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Videoplayer from './Components/Videoplayer/Videoplayer'

const App = () => {

  const[playState,setPlayState]=useState(false)

  return (
    <div>
      <Navbar />
      <Hero />
      <div className='container'>
        <Title subTitle='OUR PROGRAMS' title='WHAT WE OFFER'/>
        <Programs />
        <About  setPlayState={setPlayState}/>
        <Title subTitle='Gallery' title='Campus Photos'/>
        <Campus />
        <Title subTitle='Testimonials'  title='What student says'/>
        <Testimonials />
        <Title subTitle='Contact Us'  title='Get in Touch'/>
        <Contact />
        <Footer />
        </div>
      <Videoplayer  playState={playState} setPlayState={setPlayState}/>
    </div>
  )
}

export default App
