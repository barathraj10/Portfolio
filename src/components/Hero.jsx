import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'
import resume from '../assets/Barath Raj K - Software Developer.pdf'

const Hero = () => {
    const content = useRef()
    const typingRef = useRef()

    useGSAP(() => {
        // Intro animations
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

        // Typing effect
        const tl = gsap.timeline({ delay: 1.2, repeat: -1 })
        const roles = ['Software Developer', 'Web Developer']

        roles.forEach((role) => {
            // Type in
            tl.to(typingRef.current, {
                duration: role.length * 0.1,
                ease: 'none',
                onUpdate: function () {
                    const progress = this.progress()
                    const currentLength = Math.floor(progress * role.length)
                    typingRef.current.textContent = role.substring(0, currentLength)
                }
            })

            // Pause
            tl.to({}, { duration: 1.5 })

            // Erase
            tl.to(typingRef.current, {
                duration: 0.8,
                ease: 'power2.inOut',
                onUpdate: function () {
                    const progress = 1 - this.progress()
                    const currentLength = Math.floor(progress * role.length)
                    typingRef.current.textContent = role.substring(0, currentLength)
                },
                onComplete: function () {
                    typingRef.current.textContent = ''
                }
            })

            // Small gap before next
            tl.to({}, { duration: 0.3 })
        })
    }, [])

    return (
        <div id='home' ref={content} className='hero'>
            <div className="intro flex flex-col gap-3">
                <h1 className='head stagger'>Hi! I am Barath Raj</h1>
                <h2 className='text-white text-xl md:text-3xl font-medium text-center min-h-[2rem]'>
                    <span ref={typingRef} className='text-amber-300'></span>
                    <span className='typing-cursor text-white animate-pulse'>|</span>
                </h2>
                <div className="buttons flex justify-center gap-5 stagger">
                    <a 
                        href={resume} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className='labels bg-cyan-500 hover:bg-blue-600  rounded-md  transition-all duration-300 px-10 py-3 text-xl font-bold'
                    >
                        View My Resume
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Hero
