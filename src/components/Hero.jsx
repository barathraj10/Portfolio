import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'
import resume from '../assets/Barath Raj K - Resume.pdf'

const Hero = () => {
    const content=useRef()
    useGSAP(()=>{
        gsap.from('.head',{
            y:-100, opacity:0,duration:1
        })
        gsap.from('.buttons',{
            y:100, opacity:0,duration:1
        })
        

        
    },[])

  return (
    <div id='home' ref={content} className='hero'>

    

      <div className="intro flex flex-col gap-3">
        <h1 className='head stagger '>Hi! I am Barath Raj</h1>
        <div className="buttons flex justify-center gap-5 stagger">
            <a href={resume} target="_blank" rel="noopener noreferrer" className='bg-blue-300 shadow-lg rounded-md hover:shadow-blue-600 hover:scale-105 transition-all duration-300 px-10 py-3 text-xl font-bold'>View My Resume</a>
        </div>
      </div>
    </div>
  )
}

export default Hero
