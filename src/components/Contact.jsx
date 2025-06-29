import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
    const containerRef = useRef(null);
    const elementsRef = useRef([]);

    useGSAP(() => {
        gsap.from(elementsRef.current, {
            y: 100,
            opacity: 0,
            stagger: 0.5,
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top 70%',
                end: 'top 30%',
                scrub: true
            },
            duration:1,
            ease:'circ'
        });
    }, []);

    return (
        <div id='contact' className='contact' ref={containerRef}>
            <h1 ref={el => elementsRef.current[0] = el} className='border-b-amber-100'>Reach Out</h1>
            <p ref={el => elementsRef.current[1] = el} className="text-lg text-white text-center mt-2">
                Got something in mind? <span className="text-amber-300 font-semibold">Let’s talk.</span>
            </p>
            <div ref={el => elementsRef.current[2] = el} className="flex flex-wrap gap-5">
                <a href='tel:+919655839504'><i className="fa-solid fa-phone i-hover"></i></a>
                <a href='mailto:barathraj.offl@gmail.com'><i className="fa-regular fa-envelope i-hover"></i></a>
                <a href='https://www.linkedin.com/in/barath-raj-k-a2569a297/' target='_blank' rel="noopener noreferrer"><i className="fa-brands fa-linkedin i-hover"></i></a>
                <a href='https://github.com/barathraj10' target='_blank' rel="noopener noreferrer"><i className="fa-brands fa-github i-hover"></i></a>
            </div>
            <h6 ref={el => elementsRef.current[3] = el} className='text-white'>Or</h6>
            <form
                ref={el => elementsRef.current[4] = el}
                action="https://formspree.io/f/myzjogya"  
                method="POST"
                className="flex flex-col gap-4 w-full max-w-md p-5 rounded-md bg-[#083e49e3]"
            >
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    className="p-2 rounded-md text-white bg-[#384b498a]"
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                    className="p-2 rounded-md text-white bg-[#384b498a]"
                />
                <textarea
                    name="message"
                    rows="5"
                    placeholder="Your Message"
                    required
                    className="p-2 rounded-md text-white bg-[#384b498a]"
                />
                <button
                    type="submit"
                    className="bg-amber-400 hover:bg-amber-500 text-black font-semibold py-2 px-4 rounded"
                >
                    Send Message
                </button>
            </form>
        </div>
    );
};

export default Contact;
