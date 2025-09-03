import React from 'react'
import Card from './Card'
import SkillCard from './SkillCard'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger);
const Skills = () => {
  useGSAP(() => {
  gsap.from('.skill-stagger', {
    y: 50,             // reduce y offset to prevent large downward shift
    opacity: 0,
    stagger: 0.5,      // stagger of 1s is too long for multiple elements
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '.skills',
      start: 'top 70%',
      end: 'top 30%',
      scrub:true
    },
    duration:1,
    ease:'circ'
  });
  
}, []);


  return (
    <div  className='skills' id='skills'>
      <h1 className='text-white mb-0 w-full skill-stagger'><span className='text-amber-300'>S</span>kills</h1>
      <div className="w-full  grid md:grid-cols-2 lg:grid-cols-3  grid-cols-1 gap-4 skill-stagger">
        <SkillCard title="Language" stacks={["Java","Python","JavaScript"]}/>
        <SkillCard title="Frontend" stacks={["HTML","CSS","ReactJS","Bootstrap","Tailwind CSS","GSAP"]}/>
        <SkillCard title="Backend" stacks={["NodeJS", "ExpressJS", "MongoDB","REST API"]}/>
        <SkillCard title="Tools & Technologies" stacks={["Git/Github","VS Code","Postman","Vercel","Httpie"]}/>
      </div>
    </div>
  )
}

export default Skills
