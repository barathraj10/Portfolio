import React, { useRef } from 'react'
import Card from './Card'
import Profile from '../assets/Profile.jpg'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import Movie from '../assets/MovieGallery.jpg'
import Weather from '../assets/WeatherApp.jpg'
import PriceComparator from '../assets/PriceComparator.png';


const Projects = () => {

    useGSAP(() => {
  gsap.from('.card', {
    y: 100,
    opacity: 0,
    stagger: 0.8,
    duration:1,
    scrollTrigger: {
      trigger: '.card',     // wrapper of all cards
      start: 'top 70%',
      end: 'top 50%',
      scrub:true
    },
    ease:'circ'
  })
}, [])


  return (
    <div id='projects' className='projects'>
        <h1><span className='text-amber-300'>P</span>rojects</h1>
        <div className="cards">
            <Card title="Subscription Management System"  tags={["NodeJS", "ExpressJS", "MongoDB"]} completed={false}/>
            <Card title="Movie Gallery"  image={Movie} tags={["ReactJS","TMDB Api", "Tailwind CSS"]} live="https://barathraj10.github.io/movie-app/" github="https://github.com/barathraj10/movie-app" completed={true}/>
            <Card title="Price Comparator" image={PriceComparator} tags={["ReactJS", "DummyAPI", "Tailwind CSS"]} live="https://price-tracker-barath-rajs-projects.vercel.app/" github="https://github.com/barathraj10/price-tracker" completed={true}/>
            <Card  title="Weather App"  image={Weather} tags={["ReactJS","OpenWeather Api"]} live="https://barathraj10.github.io/Weather-App-using-React/" github="https://github.com/barathraj10/Weather-App-using-React" completed={true}/>
        </div>
    </div>
  )
}

export default Projects
