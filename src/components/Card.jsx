import React from 'react'
import developing from '../assets/developing.jpg'

const Card = ({title,image,tags,live,github,completed}) => {
  return (
    <div  className="card  shadow-lg shadow-[#31545a] h-90  border-1 border-cyan-500">
      
      <div className="max-h-50 w-full overflow-hidden">
        {image?(
          <img
          src={image}
          alt={title}
          className="image w-full h-full object-cover"
        />
        ):(
          <img
          src={developing}
          alt="Under Development"
          className="image w-full h-full object-cover"
        />
        )}
      </div>

      <div className="h-1/2 w-full sm:h-3/4 sm:w-3/4 p-3 flex flex-col justify-center gap-2">
        <h2 className="text-xl font-semibold text-white">{title}</h2>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-[#b5c7f8] text-blue-900 px-3 py-1 text-sm font-semibold rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      {completed?(
        <>
        <div className="buttons gap-3">
        <a className="labels text-xl text-white w-1/2 text-center bg-cyan-700 hover:bg-cyan-900 px-3 py-1 rounded-lg   transition-all duration-300" href={live}>Visit</a>
        <a className="labels text-xl text-white w-1/2 bg-gray-700 hover:bg-gray-800  text-center px-3 py-1 rounded-lg  transition-all duration-300" href={github}>Github</a>
      </div>
        </>
      ):(
        <div className="buttons gap-3">
        <a className="text-xl text-blue-1000 w-full text-center bg-gray-500 opacity-50 px-3 py-1 rounded-lg cursor-not-allowed" href={live}>Deploying soon...</a>
      </div>
      )}
    </div>
  )
}

export default Card
