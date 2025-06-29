import React from 'react'

const SkillCard = ({title,stacks}) => {
  return (
    <div className='skillCard w-full bg-[#00182c] border-solid border-2 border-[#062f86] hover:shadow-xl hover:shadow-[#4b6eaf] hover:translate-y-[-10px] transition-all duration-200 text-wrap'>
        <h2>{title}</h2>
        <div className="tags flex flex-wrap gap-2">
            {stacks.map((stack,index)=>(
                <span key={index} className='text-white text-lg font-bold bg-[#123d75]  px-3 py-2 rounded-md'>{stack}</span>
            ))}
        </div>
    </div>
  )
}

export default SkillCard
