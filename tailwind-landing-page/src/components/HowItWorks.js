import React from 'react'
import WorkComponent from './WorkComponent'

const HowItWorks = () => {
  return (
    <div className = "mt-[10rem] mx-[5rem]">
      How it works
      <WorkComponent step = {1}/>
      <WorkComponent step = {2}/>
      <WorkComponent step = {3}/>
      
    </div>
  )
}

export default HowItWorks
