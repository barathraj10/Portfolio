import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react';
import { ScrollTrigger } from 'gsap/all';
import Profile from '../assets/Profile.jpg';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const containerRef = useRef();
  const headingRef = useRef();
  const imgRef = useRef();
  const desRef = useRef();

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.from(headingRef.current, {
        y: 50,
        opacity: 0,
        borderBottomWidth: 0,
        borderColor: 'transparent',
        scrollTrigger: {
          trigger: headingRef.current,
          start: 'top 80%',
          end:'top 50%',
          scrub:true
        },
        duration: 1,
      });

      gsap.from(imgRef.current, {
        x: -50,
        y: 100,
        opacity: 0,
        scrollTrigger: {
          trigger: imgRef.current,
          start: 'top 80%',
          end:'top 50%',
          scrub:true
        },
        duration: 1,
      });

      gsap.from(desRef.current, {
        x: 50,
        y: 100,
        opacity: 0,
        scrollTrigger: {
          trigger: desRef.current,
          start: 'top 80%',
          end:'top 50%',
          scrub:true
        },
        
        duration: 1,
      });
      gsap.from('.stagger',{
        y:100,
        opacity:0,
        stagger:0.3,
        scrollTrigger:{
          trigger:desRef.current,
          start:'top 80%',
          end:'top 50%',
          scrub:true
        }

      })
    }, containerRef);

    return () => ctx.revert(); // Cleanup
  }, []);

  return (
    <div
      id="about"
      ref={containerRef}
      className="about min-h-screen text-white gap-1 p-10"
    >
      <div
        ref={imgRef}
        className="about-img w-full h-full flex justify-center items-center"
      >
        <img className="h-56 md:h-80" src={Profile} alt="Profile" />
      </div>
      <div ref={desRef} className="relative about-des w-full h-full flex flex-col justify-center gap-3 p-5">
        <h1
          ref={headingRef}
          className="heading border-solid border-transparent text-5xl text-left m-0 top-20 text-white">
          Who Am I
        </h1>
        <p className='stagger'>
          Hey, I'm Barath Raj — a curious and passionate software developer who
          enjoys turning ideas into real, interactive web experiences.
        </p>
        <p className='stagger'>
          I’m someone who loves solving problems, building clean user
          interfaces, and making things feel smooth and responsive on the web.
          Whether it's working with React, styling with Tailwind CSS, or adding
          a touch of animation with GSAP, I enjoy exploring tools that bring
          creativity and logic together.
        </p>
      </div>
    </div>
  );
};

export default About;
