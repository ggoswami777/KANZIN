import React from 'react'
import RightSection from './RightSection'
import MiddleSection from './MiddleSection'
import LeftSection from './LeftSection'

const KanzinBetterSection = () => {
  return (
    <div className='flex justify-between mt-30 gap-5'>
        <LeftSection/>
        <MiddleSection/>
      <RightSection/>
    </div>
  )
}

export default KanzinBetterSection
