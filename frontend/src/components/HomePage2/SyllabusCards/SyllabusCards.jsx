import React from 'react'
import { JapaneseCourseCards } from './SyllabusCardsData'

const SyllabusCards = () => {
  return (
    <div className='flex flex-row justify-between'>
      {
        JapaneseCourseCards.map(data=>{
            return(
                <div className='flex flex-col gap-1 text-[#d4d4d4]  justify-center 
                  px-5 py-3 rounded-2xl
                 bg-white/10 backdrop-blur-md border border-white/20 
                 shadow-[0_0_40px_rgba(238,122,201,0.25)]
                 transition-all duration-700 hover:shadow-[0_0_60px_rgba(238,122,201,0.45)]
                 max-w-sm mx-auto'>
                    

                </div>
            )
        })

      }
    </div>
  )
}

export default SyllabusCards
