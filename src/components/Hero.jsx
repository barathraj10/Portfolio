import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'
import resume from '../assets/Barath Raj K - Resume.pdf'

const Hero = () => {
    const content = useRef()
    const typingRef = useRef()
    
    useGSAP(() => {
        // Initial animations for name and buttons
        gsap.from('.head', {
            y: -100, 
            opacity: 0, 
            duration: 1,
            ease: 'power2.out'
        })
        
        gsap.from('.buttons', {
            y: 100, 
            opacity: 0, 
            duration: 1,
            ease: 'power2.out'
        })
        
        // Typing effect timeline with infinite loop
        const tl = gsap.timeline({ delay: 1.2, repeat: -1 })
        
        const roles = ['Web Developer', 'Software Developer']
        
        roles.forEach((role, index) => {
            // Type in effect
            tl.to(typingRef.current, {
                duration: role.length * 0.1, 
                ease: 'none',
                onUpdate: function() {
                    const progress = this.progress()
                    const currentLength = Math.floor(progress * role.length)
                    typingRef.current.textContent = role.substring(0, currentLength)
                }
            })
            
            // Pause for 1.5s
            tl.to({}, { duration: 1.5 })
            
            // Type out effect with ease
            tl.to(typingRef.current, {
                duration: 0.8,
                ease: 'power2.inOut',
                onUpdate: function() {
                    const progress = 1 - this.progress()
                    const currentLength = Math.floor(progress * role.length)
                    typingRef.current.textContent = role.substring(0, currentLength)
                },
                onComplete: function() {
                    typingRef.current.textContent = ''
                }
            })
            
            // Small pause before next role (or loop restart)
            tl.to({ duration: 1.5 })
        })
        
    }, [])

    return (
        <div id='home' ref={content} className='hero'>
            <div className="intro flex flex-col gap-3">
                <h1 className='head stagger'>Hi! I am Barath Raj</h1>
                <h2 className='text-white text-xl md:text-3xl font-medium text-center min-h-[2rem]'>
                    <span ref={typingRef} className='text-cyan-400'></span>
                    <span className='typing-cursor animate-pulse text-white'>|</span>
                </h2>
                <div className="button flex justify-center gap-5 stagger">
                    <a 
                        href={resume} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className='labels bg-blue-500  rounded-md  hover:bg-cyan-800 transition-all duration-300 px-10 py-3 text-xl font-bold'
                    >
                        View My Resume
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Hero