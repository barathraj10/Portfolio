import React from 'react'

const Footer = () => {
  return (
    <footer>
        <section className='w-full text-center bg-amber-400 p-2'>
        <h3 className='text-black font-block'>&copy; {new Date().getFullYear()} | Crafted with 💜 by Barath Raj </h3>
        </section>
    </footer>
  )
}

export default Footer
