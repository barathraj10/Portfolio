import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <main>
      <Navbar/>
      <div className="wrapper overflow-hidden">
        <Hero/>
        <About/>
        <Projects/>
        <Skills/>
        <Contact/>
      </div>
      <Footer/>
    </main>
  )
}

export default App
