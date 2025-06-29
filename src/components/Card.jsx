import React from 'react'


const Card = ({title,image,tags,live,github}) => {
  return (
    <div  className="card shadow-lg shadow-[#a5e6f1]  border-1 border-cyan-500">
      
      <div className="h-[200px] w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="image w-full h-full object-cover"
        />
      </div>

      <div className="h-1/2 w-full sm:h-3/4 sm:w-3/4 p-3 flex flex-col justify-center gap-2">
        <h2 className="text-lg font-bold text-white">{title}</h2>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-[#b5c7f8] text-blue-900 px-3 py-1 text-l rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="buttons gap-3">
        <a className="text-xl text-white bg-[#b16503] px-3 py-1 rounded-lg hover:bg-[#f1dcbf] hover:text-[#b16503] transition-all duration-300" href={live}>Visit</a>
        <a className="text-xl text-white bg-[#0c5df1] px-3 py-1 rounded-lg hover:bg-blue-100 hover:text-[#0c5df1] transition-all duration-300" href={github}>Github</a>
      </div>
    </div>
  )
}

export default Card
